// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const path = require('path')
const url = require('url')

const customTitlebar = require('custom-electron-titlebar')
// const customTitlebar = require('..') // Delete this line and uncomment top line

window.addEventListener('DOMContentLoaded', () => {
  new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex('#304156'),
    shadow: true
    // icon: url.format(path.join(__dirname, '/icons', '/icon.png'))
  })
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
