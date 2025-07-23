let arr=[19,4,76,20,9];
// let output=arr.reduce((res , val)=>{
//     return res+val;
// })
let output=arr.reduce((res , val)=>{
    return res>val? res:val;
})
console.log(output);
