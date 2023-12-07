const fs = require('fs');
const { stdin, stdout } = require('process');
const { Duplex } = require ('stream')

class Throttle extends Duplex {

    constructor(ms) {
      super();
      this.delay = ms;
    }
    _read(){}
    _write(chunk, encoding, callback) {
      this.push(chunk);
      setTimeout(callback, this.delay);
    }
    _final(){
      this.push(null)
    }
  }

  const throttle = new Throttle(1000)

const writeStream = fs.createWriteStream('./pages/utilities/results.txt' ,{ encoding: 'utf8' })
const readStream = fs.createReadStream('./pages/utilities/results.txt' ,{ encoding: 'utf8' })

stdin.pipe(throttle).pipe(writeStream)







// readStream.pipe(stdout)
// //readStream.pipe('./pages/utilities/results2.txt')

// readStream.on('data', chunk => {
//     console.log('---------------------------------');
//     console.log(chunk);
//     console.log('---------------------------------');
//   });

//   readStream.on('open', () => {
//     console.log('Stream opened...');
//   });

//   //why is this closing right away?
//   readStream.on('end', () => {
//     console.log('Stream Closed...');
//   });







//stdin.pipe(writeStream).pipe('./views/results.ejs')
//const readStream = fs.createReadStream('./pages/utilities/results.txt' ,{ encoding: 'utf8' })
//const logging = readStream.pipe(res)

