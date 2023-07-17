// content.js

// Function to extract the article text from the webpage
function extractArticleText() {
    // Add your code here to extract the article text from the webpage
    // You can use DOM manipulation or CSS selectors to target the relevant elements
  
    // Example 1: Using DOM manipulation
    const articleElement = document.getElementById('article'); // Assuming the article element has an ID of 'article'
    const articleText = articleElement.textContent;
    return articleText;
  
    // Example 2: Using CSS selectors
    // const articleTextElement = document.querySelector('.article-text'); // Assuming the article text is within an element with the class 'article-text'
    // const articleText = articleTextElement.textContent;
    // return articleText;
  
    // Example 3: Using a combination of DOM manipulation and CSS selectors
    // const articleContainer = document.querySelector('.article-container'); // Assuming the article container has a class of 'article-container'
    // const articleTextElement = articleContainer.querySelector('.article-text'); // Assuming the article text is within an element with the class 'article-text' inside the container
    // const articleText = articleTextElement.textContent;
    // return articleText;
  }
  
  // Send the extracted article text to the background script
  chrome.runtime.sendMessage({ action: 'extractedArticleText', articleText: extractArticleText() });
  