/*
//variables :: refer-declarations 

// ARROW FUNCTION

var testArrowFunction = () =>{
    console.log("This is test arrow function");
}

testArrowFunction();

//SCOPING


var a = 10;
console.log(a);
//Scoping starts;
{
a = 20;
console.log(a);
let b = 30;
console.log(b);
let c = 40;
console.log(c);
var e = 50;
console.log(e);
a = 30;
console.log(a);
}
console.log(a);
console.log(e);
console.log(c);



console.log();
let a=10;
console.log(a);
{
    let a = 20;
    console.log(a);
    a=30;
    console.log(a);
    const g = 100;
    console.log(g);
}
console.log(a);
console.log(g);//reference error;

*/

//TERNARY OPERATOR
/* a = 10;
console.log(a % 2 ? "odd" : "even");  */ // output is 0 means false and 1 means true



//SPREAD OPERATOR(...)

//By using this we are converting various objects into values within a single object;
//without this we will see a break in dth "studDB"

/* stud1yr = ['user1','user2','user3']
stud2yr = ['user4','user5','user6']
stud3yr = ['user7','user8','user9']
stud4yr = ['user10','user11','user12']
studDB = [stud1yr,stud2yr,stud3yr,stud4yr]
console.log(studDB);
console.log();
studDB = [...stud1yr,stud2yr,stud3yr,stud4yr]
console.log(studDB);
console.log();
studDB = [...stud1yr,...stud2yr,...stud3yr,...stud4yr]
console.log(studDB);


//REST OPERATOR(...)

function studentDB(...studDataBase){
    console.log(studentDataBase)
}
studentDB(studDB) */

//DESTRUCTING OPERATOR

/* var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];  //similar to assembling a car
var [a, b, c, d, e, f] = arr;       //similar to dis-mantling a car
console.log(a, d);
console.log(f); */

/* var arr = [10, 20, 30];
var [a, b, c, d, e, f] = arr;
console.log(f); // o/p :: undefined */

//we usually get "index out of bound" error in the looping

//HOISTING

//1.variable hoisting
/* 
console.log(a); //o/p :: reference error
var a = 10;     //o/p :: undefined
console.log(a)  //o/p :: undefined 10 

console.log(b);
let b = 10;     //o/p :: refernce error */

//2.functional hoisting

//funHoisting() //o/p :: reference error

/* funHoisting()   // o/p :: Checking functional hoisting
function funHoisting() {
    console.log("Checking functional hoisting")
}
 

funHoisting()  // o/p :: reference error 
funHoisting = () =>{
    console.log("Checking func. hoisting")
}
    */
// funtional hoisting will require 'funstion' keyword hence we can't use functional hoisting on the "arrow function"



//CLASS AND OBJECTS

/* class classEg {
  classFun() {
    console.log("Hello Function from class")
  }
}
obj = new classEg();
console.log(obj.classFun)   //o/p :: [Function: classFun]
console.log(obj.classFun()) //o/p :: ello Function from class  undefined(there this undefined bc. once we call this funtion we go to the funtion and print the output and then return to tha call with an enmpty container/memory hence this output)
 */

/* class classEg {
    classFun() {
      console.log("Hello Function from class")
      return "example Function Call"
    }
  }
  obj = new classEg();
  console.log(obj.classFun())  */  
  // o/p :: Hello Function from class
  //        example Function Call   (this is the return statement within the container/memory)


 /*  class Ex{
    functionEx(){
        console.log("This to show the ''new'' keyword")
        return 1;
    }
  }
  console.log(Ex().functionEx()); //Type Error
  console.log(new Ex().functionEx()) // o/p :: This to show the ''new'' keyword  \n 1
 */

