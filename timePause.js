// 时间停止
const pause = async (time) => {
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve()
        },time)
    })
}
