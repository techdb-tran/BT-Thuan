//1. Bài toán tìm giao của 2 tập hợp
/*let a =[1,3,5,7,4,9,10]
let b =[1,2,13,24,9,7,12,11]
let c =[]
for (var i=0; i<a.length;i++){
    for (var j=0; j<b.length; j++){
        if(a[i]===b[j]){
            c.push(a[i])
        }
    }
}
console.log(c)*/
//2. Bài toán tổng các số trong mảng > 2 và bé hơn max
/*
let a =[-1,-22,0,6,9,3,4,5,6]
let number_max = Math.max(...a)
let total = a.reduce(function(total,currentValue){
    if(currentValue>2 && currentValue<number_max){
      return total+=currentValue;  
    }
    else{
        return total
    }
},0)
console.log(total)
*/
//3. Bài toán tìm tổng các chữ số có giao thừa bé hơn 100
/*
function factorial(number){
    let ketqua =1;
    for(i=1;i<=number;i++){
       ketqua *= i}
       return ketqua
    }
    var arr=[]
    for(j=1;j<=10;j++){
        if(factorial(j)<100){ 
            arr.push(j)
            }
        }
    let total = arr.reduce(function(total,currentValue){
        return total+=currentValue
    },0)
    console.log(total)
    */
//4. Bài toán tìm số lớn nhất chia hết cho 2 trong mảng
/*
let arr=[1,3,5,6,-8,2,-4,9,12,14,-19,36,43,23,17]
let newArr=arr.filter((item)=> item%2==0)
let newArr_max=Math.max(...newArr)   
    console.log(newArr_max)
*/
//5. Tìm 2 số trong mảng mà tổng bằng 10
/*
let arr=[1,2,4,6,7,5,-3,5,9]
let newArr=arr.map((item)=> (10-item))
let newArr_1=newArr.reverse()
let newArr_2=[]
for(i=0;i<arr.length;i++){
    if(arr[i]==newArr_1[i]){
        newArr_2.push(arr[i])
    }
}
    console.log(newArr_2)
*/



