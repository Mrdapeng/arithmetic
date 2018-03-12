function _ajax=function(){
    var xhr  =new XMLHttpRequest()
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4){
            if(xhr.status===ok){
                console.log(xhr.responseText);
            }else{
                console.log('Error'+xhr.status);
            }
        }
    }
    xhr.open('GET','xxx')
    xhr.send()
    xhr.setRequestHeader('Content-type','application/json')
}