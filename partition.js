function partiton(arr,l,r){
    var p = arr[r]
    var less=l-1
    for(var i=l;i<r;i++)
    {
            if(arr[i]<=p){
                swap(arr,++less,i)
            }
    }
    return less
}
function swap(arr,i,j){
    var temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}
function partiton2(arr,l,r){
    var less=l-1
    var more=r
    while(l<more){
        if(arr[l]<arr[r]){
            swap(arr,++less,l++)
        }else if(arr[l]>arr[r]){
            swap(arr,--more,l)
        }else{
            l++
        }
    }
    swap(arr,more,r)
    return [less+1,more]
}
function myParition(arr,L,R){
    var less = L-1
    var more = R
    while(l<more){
        if(arr[L]<arr[R]){
            swap(arr,++less,L++)
        }else if(arr[L]>arr[R]){
            swap(arr,--more,L)
        }else{
            l++
        }
        swap(arr,more,R)
    }
    return arr
}

function helanguoqi(arr,l,r){
    var less = l -1
    var more = r 
    while(l<more){
        if(arr[l]<arr[r])
        {
            swap(arr,++less,l++)
        }else if (arr[l]>arr[r]){
            swap(arr,--more,l)
        }else{
            l++
        }
    }
    swap(arr,more,r)
    return arr
}
function quickSort(arr,l,r){
    if(l<r){
        swap(arr,l+~~(Math.random()*(r-l+1)),r)
        var p = partiton2(arr,l,r)
        quickSort(arr,l,p[0]-1)
        quickSort(arr,p[1]+1,r)
    }
    return arr
}
function main(){
    var test = [3,2,4,5,7,6,4]
    // var result = partiton2(test,0,test.length-1)
    var quickReult =quickSort(test,0,test.length-1)
    console.log("result",quickReult)
}
main()