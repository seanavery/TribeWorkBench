// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')

// const newWindowBtn = document.getElementById('wallet_link')
//
// newWindowBtn.addEventListener('click', function(event){
//   const modalPath = path.join('file://', __dirname, '/modal.html')
//   let win = new BrowserWindow({width:400, height:400})
//   win.on('move', function(){window.alert('hello world')})
//   win.on('closed', function(){ win = null })
//   win.loadURL(modalPath)
//   win.show()
// })
