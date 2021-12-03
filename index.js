const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
    var arr=[];
  const fileStream = fs.createReadStream('CSS.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    if((line!="" || line!='') && line.startsWith(".")){
        var temp=line.split(":");
        arr.push(temp[0].substring(1))
    }
    
  } 
  return arr;
}

processLineByLine().then(val=>{
    fs.writeFile('./test.txt', val.join(","), err => {
        if (err) {
          console.error(err)
          return
        }
        //file written successfully
      })
});