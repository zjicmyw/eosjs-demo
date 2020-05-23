const {rpc,address} = require('./eosAPI');

// rpc对象支持promise，所以使用 async/await 函数运行rpc命令
const  runRpc = async () => {

  // 获取主网信息
  // const info = await rpc.get_info();
  // console.log(info);

  // 获取账号的信息
  const accountInfo = await rpc.get_account(address);
  // console.log(accountInfo);

  //获取账号的资产
  // const balance = await rpc.get_currency_balance('eosio.token',address);
  // console.log(balance);

  //获取账号操作历史
  const actionHistory = await rpc.history_get_actions(address);
  console.log(actionHistory);

};

runRpc().catch(err=>{
  console.log("rpc error: ",err)
});

