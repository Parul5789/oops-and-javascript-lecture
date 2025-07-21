let n=prompt("enter size of array");
let arr=[];
for(let i=0;i<n;i++){
    arr.push(i+1);
}
console.log(arr);
let sum=arr.reduce((res , val)=>{
    return res+val;
})
console.log(sum);
let product=arr.reduce((res , val)=>{
    return res*val;
})
console.log(product);