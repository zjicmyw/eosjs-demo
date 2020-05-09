const { Api, JsonRpc, RpcError } = require('eosjs');
const JsSignatureProvider = require('eosjs/dist/eosjs-jssig');  // development only
const fetch = require('node-fetch');                            // node only; not needed in browsers
const { TextEncoder, TextDecoder } = require('util');           // node only; native TextEncoder/Decoder 
const config=require('./config.json')
const address = config['account']['address']
const signatureProvider = new JsSignatureProvider.JsSignatureProvider([config['account']['privateKey']]);
const rpc = new JsonRpc(config['eosapi'], { fetch });
const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

  (async () => {
    const result = await api.transact({
      actions: [{
        account: 'eosio.token',
        name: 'transfer',
        authorization: [{
          actor: address,
          permission: 'active',
        }],
        data: {
          from: address,
          to: 'zjicmhahahah',
          quantity: '0.0010 EOS',
          memo: 'test2',
        },
      }]
    }, {
      blocksBehind: 3,
      expireSeconds: 30,
    });
    console.dir(result);
  })();


