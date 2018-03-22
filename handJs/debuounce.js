function debounce(time,action){
    var last ;
    return function(){
        var context=this,
        args=arguments
        clearTimeout(last)
        //setTimeout 是window的方法所有这里保存了一次this
        last =setTimeout(() => {
            action.apply(context,arguments)
        }, time);
    }
}