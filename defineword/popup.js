chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'definition') {
    document.getElementById('definition').innerText = message.definition;
  }
});
