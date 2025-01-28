document.addEventListener('DOMContentLoaded', function () {
    const imagesContainer = document.getElementById('images-container');
    
    // Get all images from the current tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: 'Array.from(document.images).map(img => img.src);'
      }, function (result) {
        const imageUrls = result[0];
        
        // Display thumbnails and paths
        imageUrls.forEach(url => {
          const imgElement = document.createElement('img');
          imgElement.src = url;
          imgElement.alt = url;
          imgElement.style.maxWidth = '100px';
          imgElement.style.margin = '5px';
          
          const linkElement = document.createElement('a');
          linkElement.href = url;
          linkElement.target = '_blank';
          linkElement.textContent = url;
          linkElement.style.display = 'block';
          
          const container = document.createElement('div');
          container.appendChild(imgElement);
          container.appendChild(linkElement);
          imagesContainer.appendChild(container);
        });
      });
    });
  });
  