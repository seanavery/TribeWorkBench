console.log("hello form ethereum.js")
var Web3 = require('web3')
var geth = require('child_process').spawn('/usr/local/bin/geth', ['--testnet', '--rpc'])

geth.stdout.on('data', (data) => {
  console.log(data)
})

geth.stderr.setEncoding('utf-8')

geth.stderr.on('data', (data) => {
  console.log(data)
})
