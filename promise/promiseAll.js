function getUrl(url){
    return new Promise((resolve,reject)=>{
        var xhr = new XMLHttpRequest()
        xhr.open('GET',url)
        xhr.onload=function(){
            if(xhr.status===200){
                resolve(xhr.responseText)
            }else{
                reject(new Error(xhr.statusText))
            }
        }
        xhr.onerror=function(){
            reject(new Error(xhr.statusText))
        }
        xhr.send()
    })
}
var request  ={
    commnet:function(){
        return getUrl('http://azu.github.io/promises-book/json/comment.json').then(JSON.parse)
    },
    people:function(){
        return getUrl('http://azu.github.io/promises-book/json/people.json').then(JSON.parse)
    }
}
function main(){
    function recordValue(results,value){
        results.push(value)
        return results
    }
    var pushValue= recordValue.bind(null,[])
    return request.commnet().then(pushValue).then(request.people).then(pushValue)
}

main().then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.error(err)
})