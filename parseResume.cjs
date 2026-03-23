const fs = require('fs');
const data = JSON.parse(fs.readFileSync('src/assets/SumeharCV.json', 'utf8'));

let fullText = '';
data.Pages.forEach(page => {
    page.Texts.forEach(textObj => {
        try {
            fullText += decodeURIComponent(textObj.R[0].T) + ' ';
        } catch(e) {
            fullText += textObj.R[0].T + ' ';
        }
    });
    fullText += '\n\n';
});

console.log(fullText);
