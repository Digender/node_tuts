const fs = require('fs');
const readStream = fs.createReadStream('./extras/readableStreams.txt', 'utf8');
const writeStream = fs.createWriteStream('./extras/exampleStream2.txt');
readStream.on('data', (chunk) => {
	writeStream.write(chunk);
});


//advantages of using streams

/*
	1. Streams use small buffer as copared to read and WriteFile methods
	2. They read and write data in chunks
	3. They can be used to write and read large files even if memory(RAM) is less
*/

