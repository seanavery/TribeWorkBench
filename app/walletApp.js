// console.log('What up, from walletApp.js')
var Web3 = require('web3')
console.log(Web3)

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
console.log(web3)

web3.eth.getCoinbase(function(error, result){
  console.log(error)
  console.log(result)
  document.getElementById('coinbase').innerHTML = result

  var balance = web3.eth.getBalance(result)
  document.getElementById('ethBalance'). innerHTML = balance
  console.log("balance is : " + balance)
})

web3.eth.getAccounts(function(error, result){
  document.getElementById('listAccounts').innerHTML = result
})

// console.log("account is" + accounts)
// console.log("coinbase is " + coinbase)

document.getElementById('coinbase').innerHTML = coinbase
