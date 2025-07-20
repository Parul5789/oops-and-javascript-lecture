// str="parul singh";
// for(let i  of str){    //output:- p a r u l   s i n g h     of use for iterator
//     console.log(i);
// }
// str="parul singh";
// for(let i  in str){     //output:- 0 1 2 3 4 5 6 7 8 9 10   in use for objects
//     console.log(i);
// }
const student={
    name:"parul",
    age:20,
    cgpa: 8.5
};
for(let i  in student){     //output:- name age cgpa   in use for objects
    console.log(i);
}
for(let i  in student){     //output:- parul 20 8.6  in use for objects
    console.log(student[i]);
}