function  GetUglyNumber_Solution(index){
    if(index <= 0) return 0;
    var count2 = 0,
        count3 = 0,
        count5 = 0;
    var uglyNum = [1];
    for(var i=1 ;i<index ;i++){
        uglyNum[i] = Math.min(uglyNum[count2]*2,uglyNum[count3]*3,uglyNum[count5]*5);
        if(uglyNum[i] == uglyNum[count2]*2) count2++;
        if(uglyNum[i] == uglyNum[count3]*3) count3++;
        if(uglyNum[i] == uglyNum[count5]*5) count5++;
    }
    return uglyNum[index-1];
}
GetUglyNumber_Solution(9)