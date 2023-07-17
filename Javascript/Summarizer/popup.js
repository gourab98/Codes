// popup.js

// Get the summarized article text from the background script
chrome.runtime.sendMessage({ action: 'getSummarizedText' }, function (response) {
    if (response.action === 'summarizedText') {
      // Update the summarized text in the popup
      const summarizedTextElement = document.getElementById('summarizedText');
      summarizedTextElement.textContent = response.summarizedText;
    }
  });
  