/*
Program to demonstrate concept of functions in typescript.
*/

// Add funnction accept two parameters as nnumber and return one value as nnumber

function Add(no1:number,no2:number):number 
{  
    var ans:number;

    ans = no1+no2;
    
    return ans; 
} 

// Call the add function
var iret:number;
iret = Add(10,1);

console.log("Addition is :"+iret);