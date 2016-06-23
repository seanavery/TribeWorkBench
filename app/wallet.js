var BrowserWindow = require('electron').remote.BrowserWindow
console.log("hello from wallet.js this is the browser window" + BrowserWindow)
var path = require('path')
var walletButton = document.getElementById('wallet_link')

// walletButton.addEventListener('click', function(event){
//   console.log("dirname is : " + __dirname)
//   const modalPath = path.join('file://',  __dirname, '/wallet.html')
//   console.log(viewPath)
//   var win = new BrowserWindow({width:400, height:400})
//   win.on('closed', function(){win=null})
//   win.loadURL(modalPath)
//   win.show()
// })

walletButton.addEventListener('click', function(event){
  const modalPath = path.join('file://', __dirname, '/wallet.html')
  let win = new BrowserWindow({width:800, height:400})
  // win.on('move', function(){window.alert('hello world')})
  win.on('closed', function(){ win = null })
  win.loadURL(modalPath)
  win.show()
})
