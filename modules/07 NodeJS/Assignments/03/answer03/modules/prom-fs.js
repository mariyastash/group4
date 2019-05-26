const fs = require('fs');

function writeFilePromise(filename, data) {
    return new Promise((res, rej) => {
        fs.writeFile(filename, data, (error) => {
            if (error) rej(`Error: ${error}`);

            res('The file has been saved');
        })
    });
}

function readFilePromise(filename) {
    return new Promise((res, rej) => {

        fs.readFile(filename, (error, data) => {
            if (error) rej(`Error: ${error}`);

            res(data);
        })
    });
}

function appendFilePromise(filename, data) {
    return new Promise((res, rej) => {

        fs.appendFile(filename, data, (error) => {
            if (error) rej(`Error: ${error}`);

            res(`The data was appended to file`);
        });
    });
}

function unlinkFilePromise(filename) {
    return new Promise((res, rej) => {
        fs.unlink(filenale, (error) => {
            if (error) rej(`Error: ${error}`);

            res(`FILE: ${filename} was deleted`);
        });
    });
}

function readFileIfExists(filename) {
    return new Promise((res, rej) => {
        fs.access(filename, fs.constants.F_OK, (error) => {
            if (error) rej(`Error: The specified file: ${filename} does not exist`);

            readFilePromise(filename)
            .then(data => res(data));
        });
    });
}

module.export = { readFilePromise, writeFilePromise, appendFilePromise, unlinkFilePromise };