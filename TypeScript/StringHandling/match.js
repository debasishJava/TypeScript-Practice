var phn = '8917689677';
var phnRule = '[0-9]{10}';
var phnRule01 = /[0-9]{10}/;
console.log(phn.match(phnRule));
if (phn.match(phnRule)) {
    console.log("phone number matched");
}
else {
    console.log("incorrect phone number");
}
if (phn.match(phnRule01)) {
    console.log("perfect match");
}
