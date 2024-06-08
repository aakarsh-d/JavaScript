// var , let , const
console.log("HELLO WORLD");
 let fname="DEKu";
 let ismarried=true;
 //if else
 if(ismarried==true)
    {
        console.log(fname+"  is married");
    }
else{
    console.log(fname+" is not married");
}

// checking even no or not

let a=19;
if(a%2==0)
    {
        console.log(a + " is even")
    }
else
{
    console.log(a + " is odd")
}


// for loop
// write a program that counts from 0-100 and prints(for loop)
let ans=0;
for(let i=0;i<100;i++){
    ans=ans+1;
    }
    console.log(ans);


// write a program to greet a person given their first and last name
let firstname="Dekuu";
let lastname="Midoriya";
console.log("Hello! "+ firstname+ " "+ lastname);


// write a program that greets a person based on their gender(if else)
let age=18;
if(age<18)
    {
        console.log("Yo broo!");
    }
else{
    console.log("Namaste!");
}


const ages=[21,22,23,24,25,26,100];
const numberofpeople=ages.length;
for(let i=0;i<numberofpeople;i++)
    {
        if(ages[i]%2==0)
            console.log(ages[i]);
    }


    let arr=[10,20,30,40];
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    console.log(sum);


const personarray=["ramanguy","deku","anya"];
const genderarray=["male","male","female"];
for(let i=0;i<personarray.length;i++){
    if(genderarray[i]=="male"){
        console.log(personarray[i]);
    }
}

const user1={
    firstn: "Harkirat",
    gender: "male"
}
console.log(user1["gender"])
// const value=[1,2,3];






//reverse an array
let ar=[1,2,3,4,5];
let p=[ar.length];
for(let i=5;i<0;){
    p[i]=ar[i-1];
}
for(let i=0;i<5;i++){
console.log(p)
}
    
//find the largest number 
let array=[1,3,4,5,6,7,11];
let key=0;
for(let i=0;i<array.length;i++){
    
    if(array[i]>key)
        {
            key=array[i];
        }
    
}
console.log(key);