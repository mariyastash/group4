const fileSystem = require('./modules/prom-fs');

const readFilePromise = async filename => {
    try{
        const fileContent = await fileSystem.readFilePromise(filename);
        console.log(fileContent);
    }
    catch(error){
        console.error(error);
    }
}

const writeFilePromise = async (filename) => {
    try{
        const msg = await fileSystem.writeFilePromise(filename, 'hello');
        console.log(msg);
    }
    catch
}