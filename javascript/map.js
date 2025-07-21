let arr=[1,2,3,4,5];
let newarr=arr.map((val)=>{
    return val*2;
});
console.log(newarr);
// filter method
let newarr2=arr.filter((val)=>{
    return  val%2==0;
});
