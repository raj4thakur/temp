const fs = require('fs');
const content = fs.readFileSync('temp_js_bundle.js', 'utf-8');
const i = content.indexOf('id:"01"');
if (i > -1) {
  console.log(content.substring(i - 100, i + 5000));
} else {
  console.log('Not found');
}
