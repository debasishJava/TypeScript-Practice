const max=100;
let counter=20;
//example-1
/*
if(counter<max)
   counter++;

console.log(`value of counter is :: ${counter}`);

*/

//Example-2
/*
counter>max ? counter++ : counter=1;

console.log(`counter:: ${counter}`);
*/

//Example-3

let discount:number;
let value=11;

if(value<0 && value<=5){
    discount=5;
}else if(value >5 && value <=10){
    discount=10;
}else{
    throw new Error(`value is incorrect for applying discount`);
}