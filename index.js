const fs = require('fs/promises');
const path = require('path');

const content = new Date().toString().replace(/[:.]/g, '-');
let paths = `./files/${content}.txt`;

async function create() {
            try {
                
                await fs.writeFile(paths, content, { flag: 'w' });
               
              const d = await fs.readFile(paths, 'utf8');
              console.log(d);
              const v = (await fs.readdir('./files')).map(fileName => {
                return path.join('./files', fileName);
              });
              console.log(v);
              await fs.unlink('./files/Mon Jul 24 2023 13-00-28 GMT+0530 (India Standard Time).txt');
            } catch (err) {
                console.log(err)
            }
}

 create();

