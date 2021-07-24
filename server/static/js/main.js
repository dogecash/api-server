var uri = window.location.protocol + '//' + window.location.host
var api = [
    {
        'name': '/info',
        'example': '/info',
        'description': 'This method return current info about DogeCash network.',
        'method': 'GET',
        'id': 'info'
    }, {
        'name': '/height/int:height',
        'example': '/height/1',
        'description': 'This method return block info by given height.',
        'base': '/height/',
        'method': 'GET',
        'id': 'height',
        'params': [
            {
                'title': 'height',
                'description': 'Block height',
                'example': 1,
                'key': true
            }, {
                'title': 'offset',
                'description': 'Offset of transactions list',
                'default': 0
            }
        ]
    }, {
        'name': '/block/string:hash',
        'example': '/block/00000ae6d22cf38ad8bb55538f508bcf84c0ace873e87ef4cc200e366e848412',
        'description': 'This method return block info by given hash.',
        'base': '/block/',
        'method': 'GET',
        'id': 'block',
        'params': [
            {
                'title': 'hash',
                'description': 'Block hash',
                'example': '00000ae6d22cf38ad8bb55538f508bcf84c0ace873e87ef4cc200e366e848412',
                'key': true
            }, {
                'title': 'offset',
                'description': 'Offset of transactions list',
                'default': 0
            }
        ]
    }, {
        'name': '/header/string:hash',
        'example': '/header/00000ae6d22cf38ad8bb55538f508bcf84c0ace873e87ef4cc200e366e848412',
        'description': 'This method return block header by given hash.',
        'base': '/header/',
        'method': 'GET',
        'id': 'header',
        'params': [
            {
                'title': 'hash',
                'description': 'Header hash',
                'example': '00000ae6d22cf38ad8bb55538f508bcf84c0ace873e87ef4cc200e366e848412',
                'key': true
            }
        ]
    }, {
        'name': '/range/int:height',
        'example': '/range/100?offset=3',
        'description': 'This method return range of blocks staring from certain height.',
        'base': '/range/',
        'method': 'GET',
        'id': 'range',
        'params': [
            {
                'title': 'height',
                'description': 'Height of range start',
                'example': 1,
                'key': true
            }, {
                'title': 'offset',
                'description': 'Number of blocks required',
                'example': 3,
                'default': 30
            }
        ]
    }, {
        'name': '/balance/string:address',
        'example': '/balance/DGMCvV2xnhmZg1zioX7PCBWrwsEjoycchP',
        'description': 'This method return address balance.',
        'base': '/balance/',
        'method': 'GET',
        'id': 'balance',
        'params': [
            {
                'title': 'address',
                'description': 'Request address',
                'example': 'DSwGy32nTPm8nM5YfobvbvHryHiJSMtL9y',
                'key': true
            }
        ]
    }, {
        'name': '/mempool/string:address',
        'example': '/mempool/DGMCvV2xnhmZg1zioX7PCBWrwsEjoycchP',
        'description': 'This method return address mempool transactions.',
        'base': '/mempool/',
        'method': 'GET',
        'id': 'mempool',
        'params': [
            {
                'title': 'address',
                'description': 'Request address',
                'example': 'DSwGy32nTPm8nM5YfobvbvHryHiJSMtL9y',
                'key': true
            }
        ]
    }, {
        'name': '/unspent/string:address',
        'example': '/unspent/DGMCvV2xnhmZg1zioX7PCBWrwsEjoycchP?amount=1',
        'description': 'This method return address unspent outputs.',
        'base': '/unspent/',
        'method': 'GET',
        'id': 'unspent',
        'params': [
            {
                'title': 'address',
                'description': 'Request address',
                'example': 'DGMCvV2xnhmZg1zioX7PCBWrwsEjoycchP',
                'key': true
            }, {
                'title': 'amount',
                'description': 'Required amount',
                'example': 1,
                'default': 0
            }
        ]
    }, {
        'name': '/history/string:address',
        'example': '/history/DGMCvV2xnhmZg1zioX7PCBWrwsEjoycchP',
        'description': 'This method return list of address transaction hashes.',
        'base': '/history/',
        'method': 'GET',
        'id': 'history',
        'params': [
            {
                'title': 'address',
                'description': 'Request address',
                'example': 'DGMCvV2xnhmZg1zioX7PCBWrwsEjoycchP',
                'key': true
            }, {
                'title': 'offset',
                'description': 'Offset of transactions list',
                'example': 0,
                'default': 0
            }
        ]
    }, {
        'name': '/transaction/string:hash',
        'example': '/transaction/229da48a3dc5cb3daf02734b22138210d7c98ea2ce340ff4251a54ab7c79eafa',
        'description': 'This method return info about transaction.',
        'base': '/transaction/',
        'method': 'GET',
        'id': 'transaction',
        'params': [
            {
                'title': 'hash',
                'description': 'Transaction hash',
                'example': '229da48a3dc5cb3daf02734b22138210d7c98ea2ce340ff4251a54ab7c79eafa',
                'key': true
            }
        ]
    }, {
        'name': '/mempool',
        'example': '/mempool',
        'description': 'This method return info about mempool.',
        'method': 'GET',
        'id': 'mempool-info'
    }, {
        'name': '/supply',
        'example': '/supply',
        'description': 'This method return info about current coins supply.',
        'method': 'GET',
        'id': 'supply'
    }, {
        'name': '/fee',
        'example': '/fee',
        'description': 'This method return recomended transaction fee.',
        'method': 'GET',
        'id': 'fee'
    }, {
        'name': '/decode/string:raw',
        'example': '/decode/01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff03510101ffffffff010000000000000000232103338d9b389eef79f0191c9acb90117223ed1deed1ba17c3207e768425d653f410ac00000000',
        'description': 'This method return decoded info about transaction.',
        'base': '/decode/',
        'method': 'GET',
        'id': 'decode',
        'params': [
            {
                'title': 'transaction',
                'description': 'Signed transaction',
                'example': '01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff03510101ffffffff010000000000000000232103338d9b389eef79f0191c9acb90117223ed1deed1ba17c3207e768425d653f410ac00000000',
                'key': true
            }
        ]
    }, {
        'name': '/broadcast',
        'example': '/broadcast',
        'description': 'This method broadcast raw signed transaction to DogeCash network.',
        'method': 'POST',
        'id': 'broadcast',
        'response': {
            'result': '8d0f52a1177c7a954cf4f952532c49c8d55f9437539b544d92f83c14e1929950',
            'error': null,
            'id': 'api-server'
        },
        'params': [
            {
                'title': 'raw',
                'description': 'Signed raw transaction'
            }
        ]
    }
]

for (var i = 0; i < api.length; i++) {
    var options = ''
    if (api[i].params != undefined) {
        var params = api[i].params
        for (var j = 0; j < params.length; j++) {
            options += `
                <div class="example-input input-group mt-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            ${params[j].title}
                        </span>
                    </div>
                    <input type="text" data-example="${params[j].example != undefined ? params[j].example : ''}" data-name="${params[j].title}" data-key="${params[j].key != undefined ? params[j].key : 'false'}" class="form-control docs-input" placeholder="${params[j].description} ${params[j].default != undefined ? `(default: ${params[j].default})` : ''}">
                </div>`
        }
    }

    var content = `
        <div class="card mb-3 api-doc-block" data-example-base="${uri}${api[i].base}" data-request-method="${api[i].method}">
            <div class="card-header">
                <span>
                    <span class="mr-1 badge badge-success">${api[i].method}</span>
                </span>
                <b>${api[i].name}</b>
                <div class="float-right">
                    <button style="padding: 0rem .5rem;" class="btn btn-primary btn-sm" onclick="docs('${api[i].id}', '${api[i].method}')">
                        Run <span class="entypo right"></span>
                    </button>
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-12">
                        <div class="mb-3">
                            ${api[i].description}
                        </div>
                        <div id="${api[i].id}">
                            <div class="card">
                                <div class="card-header" style="padding: .5rem 1.25rem;">
                                    <a id="${api[i].id}-link" href="${uri}${api[i].example}" class="doc-link" target="_blank">
                                        ${uri}${api[i].example}
                                    </a>
                                </div>
                                <pre class="json-display d-none"></pre>
                                <span class="loading">
                                    <div class="text-center">
                                        <div class="spinner-border" role="status" style="margin: 20px;">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            ${options}
                        </div>
                    </div>
                </div>
            </div>
        </div>`

    $('#docs').append(content)
    if (api[i].response == undefined) {
        docs(api[i].id)
    } else {
        display(api[i].id, api[i].response)
    }
}

function request(url, method, data) {
    return Promise.resolve($.ajax({
        'method': method,
        'url': url,
        'data': data
    })).then(function(data) {
        return data
    })
}

function docs(tag, method = 'GET') {
    $(`#${tag} pre`).addClass('d-none')
    $(`#${tag} span.loading`).removeClass('d-none')

    var link = $(`#${tag}-link`).attr('href')
    var params = {}

    if (method == 'POST') { params = inputs($(`#${tag}`))[1] }

    request(link, method, params).then(function(data) {
        display(tag, data)
    })
}

function display(tag, data) {
    new JsonEditor(`#${tag} pre`, data)
    $(`#${tag} pre`).removeClass('d-none')
    $(`#${tag} span.loading`).addClass('d-none')
}

function inputs(docs) {
    var params = {}
    var base = docs.attr('data-example-base')

    docs.find('.example-input').each(function() {
        var input = $(this).find('input')
        var name = input.attr('data-name')
        var example = input.attr('data-example')
        var key = JSON.parse(input.attr('data-key'))

        var data = input.val() != '' ? input.val() : example

        if (key) {
            base += data
        } else {
            if (data != '') { params[name] = data }
        }
    })

    return [base, params]
}

$('.docs-input').on('keyup', function() {
    var docs = $(this).closest('.api-doc-block')
    var method = docs.attr('data-request-method')

    if (method == 'GET') {
        var link = docs.find('.doc-link')

        var data = inputs(docs)
        var base = data[0]
        var params = data[1]

        if (Object.keys(params).length > 0) { base += '?' }
        base += $.param(params)
        link.attr('href', base)
        link.text(base)
    }
})