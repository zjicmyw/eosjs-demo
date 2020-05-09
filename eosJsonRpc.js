const { Api, JsonRpc, RpcError } = require('eosjs');
const JsSignatureProvider = require('eosjs/dist/eosjs-jssig');  // development only
const fetch = require('node-fetch');                            // node only; not needed in browsers
const { TextEncoder, TextDecoder } = require('util');           // node only; native TextEncoder/Decoder 
const config=require('./config.json')
const address = config['account']['address']
const signatureProvider = new JsSignatureProvider.JsSignatureProvider([config['account']['privateKey']]);
const rpc = new JsonRpc(config['eosapi'], { fetch });
const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });



// rpc对象支持promise，所以使用 async/await 函数运行rpc命令
const  runRpc = async () => {

  // 获取主网信息
  const info = await rpc.get_info();
  // console.log(info);

  // 获取账号的信息
  const accountInfo = await rpc.get_account(address);
  // console.log(accountInfo);

  //获取账号的资产
  const balance = await rpc.get_currency_balance('eosio.token',address);
  console.log(balance);

};

runRpc().catch(err=>{
  console.log("rpc error: ",err)
});

