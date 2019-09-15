const fs = require('fs');
fs.writeFile('./extras/example.txt', 'Hello this a node tutorial example for File Handling', (err) => {
    if (err) console.log(err);
    else console.log('File successfully created');
});

fs.readFile('./extras/example.txt', 'utf8',(err, file) => {
    if (err) console.log(err);
    else console.log(file);
});

fs.rename('extras/example.txt', 'extras/example2.txt', (err) => {
    if (err) console.log(err);
    else console.log('Successfully renamed the file');
});

fs.appendFile('./extras/example.txt', '\nSome data being appended', (err) => {
    if (err) console.log(err);
    else console.log('Succesfullty appended data to file');
});

fs.unlink('./extras/example2.txt',  (err) => {
    if (err) console.log(err);
    else console.log('Succesfullty deleted the file');
});

fs.mkdir('tutorial', (err) => {
    if (err) console.log(err);
    else {
        fs.rmdir('tutorial', (err) => {
            if (err) console.log(err);
            else {
                console.log('Succesfullty created folder');
            }
            });
        console.log('Succesfullty created folder');
    }
});

fs.readdir('extras', (err, list) => {
    if (err) console.log(err);
    else console.log(list);
})