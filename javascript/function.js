//                 create a function using function keyword that takes a string as an argument 7 returns no. of vowels
// function numvowel(str){
//     let n=0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]=='a' || str[i]=='e' ||str[i]=='i' || str[i]=='o' || str[i]=='u' ){
//             n++;
//         }
//     }
//     return n;
// }
// let ans=numvowel("nameiou");
// console.log(ans);
//                 same task using arrow function
let ans= (str)=>{
    let n=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='a' || str[i]=='e' ||str[i]=='i' || str[i]=='o' || str[i]=='u' ){
            n++;
        }
    }
    return n;
}
console.log(ans("nameiou"));