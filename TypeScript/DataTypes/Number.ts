function NumberTest(){
    let signed:number=-10;
    let unsigned:number=10;
    let float:number=10.40;
    let double:number=10.400;
    let decimal:number=10.400000000000;//upto 25 for accurate

    console.log(`signed is ${signed} \n
    unsigned is ${unsigned} \n
    float is ${float} \n
    double is ${double} \n
    decimal is ${decimal}`);
}
NumberTest();