const fs = require('fs');
const path = require('path');

const screenshotsDir = path.join('screenshots');

// Check if the directory exists
if (fs.existsSync(screenshotsDir)) {
  // Read all files in the directory
  fs.readdirSync(screenshotsDir).forEach(file => {
    // Delete each file
    const filePath = path.join(screenshotsDir, file);
    fs.unlinkSync(filePath);
  });
  console.log('Screenshots folder emptied successfully.');
} else {
  // Create the directory if it doesn't exist
  fs.mkdirSync(screenshotsDir);
  console.log('Screenshots folder created.');
}
