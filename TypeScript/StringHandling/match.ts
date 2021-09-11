let phn='8917689677';
let phnRule='[0-9]{10}';
let phnRule01=/[0-9]{10}/;

console.log(phn.match(phnRule));

if(phn.match(phnRule)){
    console.log(`phone number matched`);
    
}else{
    console.log(`incorrect phone number`);
    
}

if(phn.match(phnRule01)){
    console.log(`perfect match`);
    
}
