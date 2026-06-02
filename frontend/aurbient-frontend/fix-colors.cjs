const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/pages');
const generateScriptPath = path.join(__dirname, 'generate-solutions.cjs');

const oldHex = /#8E44AD/g;
const newHex = '#2980B9'; // Sleek Corporate Blue
const oldRgba = /rgba\(142, 68, 173, 0.1\)/g;
const newRgba = 'rgba(41, 128, 185, 0.1)';

function replaceColors(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    if (content.match(oldHex) || content.match(oldRgba)) {
        content = content.replace(oldHex, newHex);
        content = content.replace(oldRgba, newRgba);
        fs.writeFileSync(filePath, content);
        console.log('Updated colors in ' + filePath);
        updated = true;
    }
    return updated;
}

// Update generator
replaceColors(generateScriptPath);

// Update all JSX pages
function walkDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            replaceColors(fullPath);
        }
    });
}

walkDir(directoryPath);
console.log('Finished updating colors across the entire platform!');
