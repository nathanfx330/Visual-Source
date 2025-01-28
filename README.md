# Visual Source

**Visual Source** is a Firefox extension that displays webpage images as thumbnails with their file paths. Each thumbnail is clickable, opening the image in a new tab.

## Features
- Extracts all images from the current webpage.
- Displays images as thumbnails in the extension popup.
- Each image is accompanied by its path, clickable to open in a new tab.

## File Structure
```
visual-source/
├── manifest.json
├── popup.html
├── popup.js
├── styles.css
├── icons/
│   ├── icon16.jpg
│   ├── icon48.jpg
│   ├── icon128.jpg
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/visual-source.git
   ```

2. Open Firefox and navigate to `about:debugging`.
3. Click **"This Firefox"**.
4. Select **"Load Temporary Add-on..."**.
5. Choose the `manifest.json` file from the `visual-source` folder.

## Usage

1. Navigate to any webpage with images.
2. Click the **Visual Source** extension icon in the toolbar.
3. View the thumbnails and click on any image path to open it in a new tab.


## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
