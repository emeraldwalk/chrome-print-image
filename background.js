chrome.runtime.onInstalled.addListener(() => {
  /**
   * Register our "Open Image for Print" context menu item.
   */
  chrome.contextMenus.create({
    id: 'open-image-in-full-page',
    title: 'Open Image for Print',
    contexts: ['image'],
  })
})

/**
 * Open new tab to show the image where the context menu item was selected.
 */
chrome.contextMenus.onClicked.addListener(async ({ srcUrl }) => {
  await chrome.tabs.create({
    url: `image-viewer.html?img=${srcUrl}`,
  })
})
