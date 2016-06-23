alert('hello from blockSync.js')

var BrowserWindow = require('electron').remote.BrowserWindow
var path = require('path')

var walletButton = document.getElementById('blockSync_link')

walletButton.addEventListener('click', function(event){
  var modalPath = path.join("file://", __dirname, "/blockSync.html")
  alert(modalPath)
  var win = new BrowserWindow({height:400, width:800})
  win.on('closed', function(){ win = null })
  win.loadURL(modalPath)
  win.show()
})
