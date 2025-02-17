/*
Conditional Statement
1.

Looping Statement
1.while
2.do...while
3.for(;;) // use "let" to assign variables;
4.forin
5.forof
6.forEach
*/

// forin loop

/*
array = [10,20,30,"abc",true,"hello",[10,20,30]];
for(i in array){
    console.log(i+" "+array[i]);//display index of array + array elements
}*/

/*

object1 = {
    firstname:'St.Joseph',
    "lastname":"institute of technology",
    "depts":['cse',"it","ads","ece"],
    "training":'MERN'
    
} 
for(i in object1){
    console.log(i); // gives out the keys
}

*/

//forof loop

/*
array = [12,23,34]
for(i of array){
    console.log(i);// prints the elements of array
}
*/

/*
object1 = {
    firstname:'St.Joseph',
    "lastname":"institute of technology",
    "depts":['cse',"it","ads","ece"],
    "training":'MERN'
    
} 

/*
for(i of object1){
    console.log(i); // will throw "TypeError"
}


for(i of Object.keys(object1)){
    console.log(i);
}
*/

/*    TASKKKK
for(i of Object.keys(object1)){
    console.log(object1.i);
}

for({key,value} of Object.entries(object1)){ // correct brackets to be used is []
    console.log(key,value);
}

for([key,value] of Object.entries(object1)){ 
    console.log(key,value);
}

//forEach loop

array = [10,20,30,"abc",true,"hello",[10,20,30]];

array.forEach(element => {
    console.log(element);
});

console.log();
object1 = {
    firstname:'St.Joseph',
    "lastname":"institute of technology",
    "depts":['cse',"it","ads","ece"],
    "training":'MERN'
    
} 


object1.forEach((element) => {
    console.log(element):       // will give error;
})
    

Object.keys(object1).forEach((element) => {
    console.log(element);
})

console.log();
Object.entries(object1).forEach((key,value)=>{
    console.log(key,value);
})

console.log();
Object.entries(object1).forEach((key)=>{
    console.log(key);
})

*/

