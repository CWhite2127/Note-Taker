const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.log(err) : console.log(`Submission has been logged to ${destination}`)
    );

const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            const returnedData = JSON.parse(data);
            returnedData.push(content);
            writeToFile(file, returnedData);
        }
    });
};

module.exports = {readFromFile, writeToFile, readAndAppend}