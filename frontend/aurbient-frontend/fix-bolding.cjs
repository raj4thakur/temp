const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/pages');

function walkDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('fontWeight: "600", fontSize: "1.1rem"')) {
                content = content.replace(/fontWeight: "600", fontSize: "1.1rem"/g, 'fontSize: "1.1rem"');
                fs.writeFileSync(fullPath, content);
                console.log('Updated ' + fullPath);
            }
        }
    });
}

walkDir(directoryPath);
console.log('Done!');
