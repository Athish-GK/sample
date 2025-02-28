// JavaScript function to dynamically load the content from the second page
function loadPage(page) {
    const contentArea = document.getElementById('content');
  
    // Create an XMLHttpRequest to fetch the second index page's content
    const xhr = new XMLHttpRequest();
    xhr.open('GET', page, true);
  
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Update the content area with the fetched content
        contentArea.innerHTML = xhr.responseText;
      } else {
        contentArea.innerHTML = '<p>Failed to load content.</p>';
      }
    };
  
    xhr.send();
  }
  