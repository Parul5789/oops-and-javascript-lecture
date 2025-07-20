let arr=[1,2,3,4,5];
arr.forEach(function printval(val){
    console.log(val);
});
//with arrow function
let arr2=["Delhi" , "Mumbai" , "Pune"];
arr2.forEach((val)=>{
    console.log(val);
});
// foreach loop callback function contins three parameters =>  value , index , array itself
arr2.forEach((val , i , a)=>{
    console.log(val , i , a);
});