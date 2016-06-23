console.log('hello from blockSyncApp.js')

var Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

web3.eth.getCoinbase(function(err, result){
  console.log("coinbase is " + result)
})

web3.eth.isSyncing(function(error, sync){
  alert("made it to syncinc callback")
    if(!error) {
      console.log(sync)
        // stop all app activity
        if(sync === true) {
          console.log("sync == true")
           // we use `true`, so it stops all filters, but not the web3.eth.syncing polling
           web3.reset(true);

        // show sync info
        } else if(sync) {
           console.log(sync.currentBlock);

        // re-gain app operation
        } else {
          console.log("else statement")
            // run your app init function...
        }
    }
})

alert("made it to the end of the js")
