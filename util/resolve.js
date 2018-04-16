var path = require('path')
function resolve(dir){
    return path.resolve(__dirname,'..',dir)
}

function test(){
    console.log(__dirname);
    console.log(__filename);
    console.log(process.cwd());
    console.log(path.resolve('./'));
    console.log(path.resolve('wwwroot'));
}
test()