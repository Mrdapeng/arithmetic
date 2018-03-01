/**
 * 
 * <ul id="ul1">
    <li>111</li>
    <li>222</li>
    <li>333</li>
    <li>444</li>
</ul>
 * 
 */
// window.onload=function(){
//     var oUl= document.getElementById('ul1')
//     var ali  =oUl.getElementsByTagName('li')
//     for (let i = 0; i < ali.length; i++) {
//         ali[i].onclick=function(){
//             console.log('123')
//         }
//     }
// }
// 事件委托
window.onload=function(){
    var oUl= document.getElementById('ul1')
    oUl.onclick=function(event){
        var event= event||window.event
        var target = event.target||event.srcElement
        if(target.nodeName.toLowerCase()=="li"){
            console.log('123')
        }
    }
}
/**
 * 
 * <div id="box">
        <input type="button" id="add" value="添加" />
        <input type="button" id="remove" value="删除" />
        <input type="button" id="move" value="移动" />
        <input type="button" id="select" value="选择" />
    </div>
 * 
 */
window.onload = function(){
    var Add = document.getElementById("add");
    var Remove = document.getElementById("remove");
    var Move = document.getElementById("move");
    var Select = document.getElementById("select");
    
    Add.onclick = function(){
        alert('添加');
    };
    Remove.onclick = function(){
        alert('删除');
    };
    Move.onclick = function(){
        alert('移动');
    };
    Select.onclick = function(){
        alert('选择');
    }
    
}
window.onload = function(){
    var oBox = document.getElementById("box");
    oBox.onclick = function (ev) {
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if(target.nodeName.toLocaleLowerCase() == 'input'){
            switch(target.id){
                case 'add' :
                    alert('添加');
                    break;
                case 'remove' :
                    alert('删除');
                    break;
                case 'move' :
                    alert('移动');
                    break;
                case 'select' :
                    alert('选择');
                    break;
            }
        }
    }
}
/**
 * 
 * <input type="button" name="" id="btn" value="添加" />
    <ul id="ul1">
        <li>111</li>
        <li>222</li>
        <li>333</li>
        <li>444</li>
    </ul>
 */
window.onload = function(){
    var oBtn = document.getElementById("btn");
    var oUl = document.getElementById("ul1");
    var aLi = oUl.getElementsByTagName('li');
    var num = 4;
    
    //鼠标移入变红，移出变白
    for(var i=0; i<aLi.length;i++){
        aLi[i].onmouseover = function(){
            this.style.background = 'red';
        };
        aLi[i].onmouseout = function(){
            this.style.background = '#fff';
        }
    }
    //添加新节点
    oBtn.onclick = function(){
        num++;
        var oLi = document.createElement('li');
        oLi.innerHTML = 111*num;
        oUl.appendChild(oLi);
    };
}
window.onload = function(){
    var oBtn = document.getElementById("btn");
    var oUl = document.getElementById("ul1");
    var aLi = oUl.getElementsByTagName('li');
    var num = 4;
    
    function mHover () {
        //鼠标移入变红，移出变白
        for(var i=0; i<aLi.length;i++){
            aLi[i].onmouseover = function(){
                this.style.background = 'red';
            };
            aLi[i].onmouseout = function(){
                this.style.background = '#fff';
            }
        }
    }
    mHover ();
    //添加新节点
    oBtn.onclick = function(){
        num++;
        var oLi = document.createElement('li');
        oLi.innerHTML = 111*num;
        oUl.appendChild(oLi);
        mHover ();
    };
}
window.onload = function(){
    var oBtn = document.getElementById("btn");
    var oUl = document.getElementById("ul1");
    var aLi = oUl.getElementsByTagName('li');
    var num = 4;
    
    //事件委托，添加的子元素也有事件
    oUl.onmouseover = function(ev){
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if(target.nodeName.toLowerCase() == 'li'){
            target.style.background = "red";
        }
        
    };
    oUl.onmouseout = function(ev){
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if(target.nodeName.toLowerCase() == 'li'){
            target.style.background = "#fff";
        }
        
    };
    
    //添加新节点
    oBtn.onclick = function(){
        num++;
        var oLi = document.createElement('li');
        oLi.innerHTML = 111*num;
        oUl.appendChild(oLi);
    };
    var oUl = document.getElementById('test');
    oUl.addEventListener('click',function(ev){
        var target = ev.target;
        while(target !== oUl ){
            if(target.tagName.toLowerCase() == 'li'){
                console.log('li click~');
                break;
            }
            target = target.parentNode;
        }
    })
 
//  核心代码是while循环部分，
// 实际上就是一个递归调用，你也可以写成一个函数，
// 用递归的方法来调用，同时用到冒泡的原理，从里往外冒泡，
// 知道currentTarget为止，当当前的target是li的时候，
// 就可以执行对应的事件了，然后终止循环，恩，没毛病！


}