const {api,address} = require('./eosAPI');
const transfer = async () => {
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
        quantity: '0.0001 EOS',
        memo: 'test4',
      },
    }]
  }, {
    blocksBehind: 3,
    expireSeconds: 30,
  });
  console.dir(result);
};


transfer().catch(err=>{
  console.log("transfer error: ",err)
});

/*
{
  transaction_id: 'ac589c9a4f824f85fe29ce9b0695b3d0ee2a4fcde4f64d31e431e1cb2e0ae046',
  processed: {
    id: 'ac589c9a4f824f85fe29ce9b0695b3d0ee2a4fcde4f64d31e431e1cb2e0ae046',
    block_num: 121144462,
    block_time: '2020-05-17T11:01:08.500',
    producer_block_id: null,
    receipt: { status: 'executed', cpu_usage_us: 252, net_usage_words: 17 },
    elapsed: 252,
    net_usage: 136,
    scheduled: false,
    action_traces: [ [Object] ],
    account_ram_delta: null,
    except: null,
    error_code: null
  }
}
*/
