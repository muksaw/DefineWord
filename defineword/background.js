chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "defineWord",
    title: "Define '%s'",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "defineWord") {
    const selectedText = info.selectionText;
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      function: fetchDefinition,
      args: [selectedText]
    });
  }
});

function fetchDefinition(word) {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => response.json())
    .then(data => {
      if (data && data[0] && data[0].meanings) {
        const definition = data[0].meanings[0].definitions[0].definition;
        showDefinitionPopup(word, definition);
      } else {
        showDefinitionPopup(word, "No definition found");
      }
    })
    .catch(error => {
      console.error('Error fetching definition:', error);
      showDefinitionPopup(word, "Error fetching definition");
    });
}

function showDefinitionPopup(word, definition) {
  const popup = document.createElement('div');
  popup.style.position = 'fixed';
  popup.style.bottom = '10px';
  popup.style.right = '10px';
  popup.style.padding = '10px';
  popup.style.backgroundColor = 'white';
  popup.style.border = '1px solid black';
  popup.style.zIndex = '10000';
  popup.innerText = `${word}: ${definition}`;
  document.body.appendChild(popup);
  
  setTimeout(() => {
    document.body.removeChild(popup);
  }, 5000);
}
