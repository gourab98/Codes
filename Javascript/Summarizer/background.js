// background.js

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'extractedArticleText') {
      // Send the article text to ChatGPT for summarization
      const articleText = request.articleText;
      const summarizedText = summarizeArticle(articleText);
  
      // Send the summarized text back to the content script
      sendResponse({ action: 'summarizedText', summarizedText: summarizedText });
    }
  });
  
  // Function to summarize the article text using ChatGPT
  function summarizeArticle(articleText) {
    // Add your code here to call the ChatGPT API or library to summarize the article
    // You may need to sign up for the API and obtain the necessary credentials
  
    // Sample code using OpenAI GPT-3 API (requires API credentials)
    // const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer YOUR_API_KEY'
    //   },
    //   body: JSON.stringify({
    //     prompt: articleText,
    //     max_tokens: 50
    //   })
    // });
    // const data = await response.json();
    // const summarizedText = data.choices[0].text;
  
    // Return the summarized text
    return 'This is a summarized version of the article.';
  }
  