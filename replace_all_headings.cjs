const fs = require('fs');
const filePath = '/Users/suryansh/Desktop/Kaula/kualakubs-app/src/data/blogsData.js';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/<h2>(.*?)<\/h2>/g, '<p><strong>$1</strong></p>');
content = content.replace(/<h3>(.*?)<\/h3>/g, '<p><strong>$1</strong></p>');

fs.writeFileSync(filePath, content);
console.log("Updated h2 and h3 to bold p in blogsData.js");
