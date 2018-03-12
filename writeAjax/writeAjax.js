let xhr = new XMLHttpRequest();
xhr.open('GET','api/xxx',false);
xhr.onreadystatechange=function () {
    if(xhr.readyState===4){
        if(xhr.status===200){
            alert(xhr.responseText)
        }
    }
};
xhr.send(null);



var xhr  = new XMLHttpRequest()

xhr.open('GET','api/xxx',false)
xhr.onreadystatechange=function () {
    if(xhr.readyState===4){
        if(xhr.status===200){
            console.log(xhr.responseText)
        }
    }
}
xhr.send(null)
