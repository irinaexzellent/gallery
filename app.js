const fs = require('fs');
const sharp = require('sharp');

const images = fs.readdirSync('./images');
//console.log(images);
fs.writeFile('images.json', JSON.stringify(images), 'utf8', function(err) {
    console.log(err);
});

for (let i = 0; i < images.length; i++){
    sharp('./images/'+ images[i])
        .resize(320,240)
        .toFile('./images/min_' + images[i], (err, info) => {
            console.log(err);
        });
}

