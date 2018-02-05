var handler={
    set:function(){
        console.log('do not touch me')
    },
    get:function(){
        console.log('do not touch me')
    },
    //删除属性的时候调用
    deleteProperty(){
        console.log('do not touch me')
    }

}
const tomy = new Proxy({},hanler)
