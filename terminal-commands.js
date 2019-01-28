const fs = require('fs');

module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
        const filesToString = files.reduce((acc, file) => {
            return `${acc} ${file}`;
        }, '');
        console.log(filesToString);
    });
};

module.exports.touch = (fileName) => {
    fs.writeFile(fileName, '', function (err) {
        if (err) throw err;
        console.log(`${fileName}` created);
    });

};

module.exports.mkdir = (directoryName) => {
    fs.mkdir(`./${directoryName}`, function (err) {
        if (err) throw err;
        console.log(`${directoryName}` created);
    });

};