const fs = require('fs');
const source = require('./stucture.json');
const package = require('./package.json');

module.exports = (function() {


    (function basicInit() {

        require('child_process').exec('npm init --yes', function(error, out) {
            let pathToPackage = __dirname + '/package.json',
                read,
                json;

            if(error){
                throw error;
                return;
            }

            try {
                read = fs.readFileSync("package.json", 'utf8');
                json = JSON.parse(read);
                json.dependencies = package.dependencies;
                json.scripts = package.scripts;
                fs.writeFileSync("package.json", JSON.stringify(json, null, 4))

                if (fs.existsSync(__dirname + '/source/gitignore')) {
                    fs.renameSync(__dirname + '/source/gitignore', __dirname + '/source/.gitignore')
                }

                if (fs.existsSync(__dirname + '/source/babelrc')) {
                    fs.renameSync(__dirname + '/source/babelrc', __dirname + '/source/.babelrc')
                }
            } catch(e){
                console.log(e);
            }
            createTree(source, "")
        });

    }())

    function createTree(tree, folder) {

        for (let mark in tree) {

            if (tree[mark] instanceof Object && !(tree[mark] instanceof Array) ) {
                if (!fs.existsSync(folder + mark)) {
                    fs.mkdirSync(folder + mark);
                }
                folder += mark + "/";
                createTree(tree[mark], folder);

                let folderArray = removeEmptyFromArray(folder),
                    folderCut = folderArray.length > 1 ? folderArray.slice(0, folderArray.length - 1) : folderArray;

                folder = folderCut.join('/') + '/';

            } else {
                if (tree[mark] == "") {
                    if (!fs.existsSync(folder + mark)) {
                        fs.mkdirSync(folder + mark);
                    }
                } else if (!isNaN(mark)) {
                    fs.createReadStream(__dirname + '/source/' + tree[mark]).pipe(fs.createWriteStream(folder + tree[mark]));
                } else if (mark == "$") {
                    cycleCopy(tree[mark], "")
                } else if(Array.isArray(tree[mark])){
                    let git = tree[mark][0],
                        branch = tree[mark][1],
                        folderIntoClone = folder + mark;
                    require('child_process').exec('git clone --depth=1 --branch='+ branch + ' ' + git + ' ' + folderIntoClone + ' && rm -rf ' + folderIntoClone + '/.git ' + folderIntoClone + '/.gitignore', function(error, out){
                        if(error){
                            console.log(error);
                        }
                    })
                } else {
                    if (!fs.existsSync(folder + mark)) {
                        fs.mkdirSync(folder + mark);

                        cycleCopy(tree[mark], folder + mark + "/")

                    }
                }
            }

        }

    }

    function removeEmptyFromArray(folder){

        let folderArray = folder.split('/'),
            newArray = []

        for (let i = 0; i < folderArray.length; i++) {
            if(folderArray[i]){
                newArray.push(folderArray[i])
            }
        }

        return newArray;
    }

    function cycleCopy(tree, folder) {
        let listFiles = tree.split(', ');
        for (let i = listFiles.length - 1; i >= 0; i--) {
            fs.createReadStream(__dirname + '/source/' + listFiles[i]).pipe(fs.createWriteStream(folder + listFiles[i]));

        }
    }

})();
