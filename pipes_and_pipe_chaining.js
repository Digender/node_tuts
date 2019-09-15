const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const readStream = fs.createReadStream('./extras/readableStreams.txt', 'utf8');
const writeStream = fs.createWriteStream('./extras/examplePipe2.txt.gz');
readStream.pipe(gzip).pipe(writeStream);


const fs = require('fs');
const zlib = require('zlib');
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('./extras/readableStreams.txt.gz');
const writeStream = fs.createWriteStream('./extras/unzip.txt');
readStream.pipe(gunzip).pipe(writeStream);
