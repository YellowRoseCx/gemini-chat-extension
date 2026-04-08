export default defineBackground(() => {
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'openBackgroundTab') {
      browser.tabs.create({ url: message.url, active: false })
      sendResponse({ success: true })
    }
  })
})
