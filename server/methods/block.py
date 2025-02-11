from server.methods.transaction import Transaction
from server import config
from server import utils
from server import cache

class Block():
    @classmethod
    def height(cls, height: int):
        data = utils.make_request("getblockhash", [height])

        if data["error"] is None:
            txid = data["result"]
            data.pop("result")
            data["result"] = utils.make_request("getblock", [txid])["result"]
            data["result"]["txcount"] = len(list(data["result"]["tx"]))

        return data

    @classmethod
    def hash(cls, bhash: str):
        data = utils.make_request("getblock", [bhash])

        if data["error"] is None:
            data["result"]["txcount"] = len(list(data["result"]["tx"]))

        return data

    @classmethod
    @cache.memoize(timeout=config.cache)
    def get(cls, height: int):
        return utils.make_request("getblockhash", [height])

    @classmethod
    def range(cls, height: int, offset: int):
        result = []
        for block in range(height - (offset - 1), height + 1):
            data = utils.make_request("getblockhash", [block])

            if data["error"] is None:
                bhash = data["result"]
                data.pop("result")

                block = utils.make_request("getblock", [bhash])
                if block["error"] is not None:
                    continue

                data["result"] = block["result"]
                data["result"]["txcount"] = len(list(data["result"]["tx"]))

                result.append(data["result"])

        return result[::-1]

    @classmethod
    @cache.memoize(timeout=config.cache)
    def inputs(cls, bhash: str):
        data = cls.hash(bhash)
        return Transaction().addresses(data["result"]["tx"])
