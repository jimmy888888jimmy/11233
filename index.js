var Changelly = require('./lib.js');

var changelly = new Changelly(
  '7fe52f27ecf54b4491f0c22309bfb4cd',
  'dbb84c1fea4f54283e749de60a66b837a9f08e7ca40db08a80aa0958484ea3ce'
);

changelly.getCurrencies(function(err, data) {
  if (err){
    console.log('Error!', err);
  } else {
    console.log('getCurrencies', data);
  }
});

changelly.createTransaction('eth', 'btc', '1PKYrd9CC4RFB65wBrvaAsTWnp8fXePuj', 10, undefined, function(err, data) {
  if (err){
    console.log('Error!', err);
  } else {
    console.log('createTransaction', data);
  }
});

changelly.getMinAmount('eth', 'btc', function(err, data) {
  if (err){
    console.log('Error!', err);
  } else {
    console.log('getMinAmount', data);
  }
});

changelly.getExchangeAmount('btc', 'eth', 1, function(err, data) {
  if (err){
    console.log('Error!', err);
  } else {
    console.log('getExchangeAmount', data);
  }
});

changelly.getTransactions(10, 0, 'btc', undefined, undefined, function(err, data) {
  if (err){
    console.log('Error!', err);
  } else {
    console.log('getTransactions', data);
  }
});

changelly.getStatus('1gy2g76', function(err, data) {
  if (err){
    console.log('Error!', err);
  } else {
    console.log('getStatus', data);
  }
});

changelly.on('payin', function(data) {
  console.log('payin', data);
});

changelly.on('payout', function(data) {
  console.log('payout', data);
});
