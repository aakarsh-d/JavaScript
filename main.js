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

const value=[1,2,3];