function testFunction(){
    console.log("This is a test function");
}
testFunction();

//TASK :: practise remaining three types of function based on parameter and argument

function hasArgument(num){
    console.log("This has a argument",num);
}
hasArgument(3);

function hasReturn(){
    return "Hello";
}
str = hasReturn();
console.log(str);

function ReturnAndArgument(x , y){
    return x*y;    
}
console.log(ReturnAndArgument(2,4));