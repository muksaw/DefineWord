chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "showPopup",
    title: "Show Popup",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "showPopup") {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      func: showPopup,
      args: [info.selectionText] // Pass the selected text as an argument
    }).catch(err => console.error('Error executing script:', err));
  }
});

function showPopup(selectedText) {
  const selection = window.getSelection();
  if (!selection.rangeCount) return;

  const range = selection.getRangeAt(0);
  const rect = range.getBoundingClientRect();
  
  const popup = document.createElement('div');
  popup.style.position = 'fixed';
  popup.style.left = `${rect.left + window.scrollX}px`;
  popup.style.top = `${rect.bottom + window.scrollY + 10}px`; // 10px below the selection
  popup.style.width = '300px';
  popup.style.padding = '20px';
  popup.style.backgroundColor = 'white';
  popup.style.borderRadius = '5px';
  popup.style.boxShadow = '0 0 12px rgba(0, 0, 0, 0.2)';
  popup.style.zIndex = '10000';
  popup.style.fontFamily = 'Arial, sans-serif';
  
  // Create header for close button and information text
  const header = document.createElement('div');
  header.style.position = 'relative';
  header.style.height = '30px'; // Adjust height as needed

  const infoText = document.createElement('span');
  infoText.innerText = 'Definitions from API library';
  infoText.style.position = 'absolute';
  infoText.style.top = '15px';
  infoText.style.fontSize = '12px';
  infoText.style.color = 'gray';

  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&times;'; // HTML entity for multiplication sign (X)
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '5px'; // Adjust top position to move it up
  closeBtn.style.right = '5px'; // Adjust right position to move it to the right edge
  closeBtn.style.backgroundColor = 'transparent';
  closeBtn.style.color = 'gray';
  closeBtn.style.border = 'none';
  closeBtn.style.fontSize = '30px'; // Increased font size
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.fontWeight = 'bold';
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(popup);
    document.removeEventListener('click', outsideClickListener);
  });

  header.appendChild(infoText);
  header.appendChild(closeBtn);
  popup.appendChild(header);

  // Add a thin line separator
  const separator = document.createElement('hr');
  separator.style.border = 'none';
  separator.style.borderTop = '1px solid #ddd';
  separator.style.margin = '10px 0';

  // Create content for popup text
  const content = document.createElement('div');
  content.style.marginTop = '15px'; // Add margin to separate from header
  content.style.fontSize = '30px';
  content.innerText = selectedText; // Use the selected text
  
  const definition = document.createElement('div');
  definition.style.marginTop = '10px';
  definition.style.fontSize = '18px';
  definition.style.color = 'black';
  definition.innerText = 'Loading definitions...';
  
  popup.appendChild(content);
  popup.appendChild(separator);
  popup.appendChild(definition);
  document.body.appendChild(popup);

  // Fetch the definition from an API
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedText}`)
    .then(response => response.json())
    .then(data => {
      if (data && data[0] && data[0].meanings) {
        const meanings = data[0].meanings[0].definitions;
        if (meanings && meanings.length > 0) {
          definition.innerText = '';
          for (let i = 0; i < Math.min(3, meanings.length); i++) {
            const meaning = meanings[i];
            const definitionItem = document.createElement('div');
            definitionItem.style.marginTop = '5px';
            definitionItem.innerText = `${i + 1}. ${meaning.definition}`;
            definition.appendChild(definitionItem);
          }
        } else {
          definition.innerText = 'No definitions found';
        }
      } else {
        definition.innerText = 'No definitions found';
      }
    })
    .catch(error => {
      console.error('Error fetching definitions:', error);
      definition.innerText = 'Error fetching definitions';
    });

  // Function to handle outside clicks
  function outsideClickListener(event) {
    if (!popup.contains(event.target)) {
      document.body.removeChild(popup);
      document.removeEventListener('click', outsideClickListener);
    }
  }
  
  // Add event listener for outside clicks
  document.addEventListener('click', outsideClickListener);
}
