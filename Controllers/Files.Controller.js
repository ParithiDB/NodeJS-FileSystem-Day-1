const FilesRouter = require('express').Router();
const fs = require('fs/promises');

FilesRouter.get('/createFile', async (request, response, next) => {
    try {
      const content = new Date().toString().replace(/[:.]/g,'-');
      await fs.writeFile(`./files/${content}.txt`, content);
      console.log('REQUEST HIT');
      const data = await fs.readFile(`./files/${content}.txt`, { encoding: 'utf8' });
      console.log(data);
      return response.status(200).json({
        message: 'Request hit',
        DateandTime: content,
      });
    } catch(err) {
      console.log(err);
      return response.status(500).json({
        message: 'File creation failed.',
      });
    }
    
  });

  FilesRouter.post('/createCustomFile', async (request, response, next) => {
    const { content } = request.body;
    await fs.writeFile('./files/k.txt', content);
    console.log("File Posted content:", content);
    return response.status(200).json({
      message: 'File created',
      content: content
    });
  });
  


module.exports = FilesRouter;