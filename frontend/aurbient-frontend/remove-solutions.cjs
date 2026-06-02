const fs = require('fs');
const path = require('path');

// 1. Update generate-solutions.cjs
const genScriptPath = path.join(__dirname, 'generate-solutions.cjs');
let genScriptContent = fs.readFileSync(genScriptPath, 'utf8');
genScriptContent = genScriptContent.replace(/to="\/solutions"/g, 'to="/"');
genScriptContent = genScriptContent.replace(/Back to Solutions/g, 'Back to Home');
fs.writeFileSync(genScriptPath, genScriptContent);
console.log('Updated generate-solutions.cjs');

// 2. Update App.jsx
const appPath = path.join(__dirname, 'src/App.jsx');
let appContent = fs.readFileSync(appPath, 'utf8');
appContent = appContent.replace(/import Solutions from '\.\/pages\/Solutions';\n/g, '');
appContent = appContent.replace(/<Route path="\/solutions" element={<Solutions \/>} \/>\n/g, '');
fs.writeFileSync(appPath, appContent);
console.log('Updated App.jsx');

// 3. Update Footer.jsx
const footerPath = path.join(__dirname, 'src/components/Footer.jsx');
let footerContent = fs.readFileSync(footerPath, 'utf8');
footerContent = footerContent.replace(/<p style=\{\{ marginBottom: "0.5rem" \}\}>.*?Solutions Directory.*?<\/p>\n/g, '');
fs.writeFileSync(footerPath, footerContent);
console.log('Updated Footer.jsx');

// 4. Update the other back links in Systems pages
const pages = [
    'AIWorkflowSystems.jsx',
    'AutomationEcosystems.jsx',
    'BusinessOperatingLayer.jsx',
    'CloudInfrastructure.jsx',
    'ERPIntelligence.jsx',
    'OperationalVisibility.jsx'
];
pages.forEach(page => {
    const filePath = path.join(__dirname, 'src/pages', page);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        content = content.replace(/to="\/solutions"/g, 'to="/"');
        content = content.replace(/Back to Solutions/g, 'Back to Home');
        fs.writeFileSync(filePath, content);
        console.log('Updated ' + page);
    }
});

// 5. Delete Solutions.jsx
const solutionsPagePath = path.join(__dirname, 'src/pages/Solutions.jsx');
if (fs.existsSync(solutionsPagePath)) {
    fs.unlinkSync(solutionsPagePath);
    console.log('Deleted Solutions.jsx');
}

console.log('Done cleaning up /solutions references.');
