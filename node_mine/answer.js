// 获取用户输入
const fs = require('fs')
const getUserInput = inputTip => {
    const myReadline = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve, reject) => {
        myReadline.question(inputTip, answer => {
            myReadline.close();
            resolve(answer);
        });
    });
};
const getDrNameList =path=>{
    let list= fs.readdirSync(path)
    let dirList = []
    list.forEach((item)=>{
        if(fs.statSync(item).isDirectory()){
            dirList.push(item)
        }
    })
    return dirList
}