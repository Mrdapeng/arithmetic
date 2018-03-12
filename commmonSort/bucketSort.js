function bucketSort(arr){
    var bucketLength=Math.max(...arr)
    var bucket=new Array(bucketLength+1).fill(0)
    console.log(bucket)
    for (let i = 0; i < arr.length; i++) {
        bucket[arr[i]]++
    }
    console.log(bucket)
    for( let i =0;i<bucket.length;i++){
        for(let j = bucket[i];j>0;j--){
            console.log(i)
        }
    }
}
bucketSort([4,2,2,5,7])
