//Primitive or Primary DataTypes

/* 
a=10
b="abc"
c=true
console.log(a,b,c)
console.log(typeof(a),typeof(b),typeof(c))



// Another type of declaration

var a=10.234
let b="abc"
const c=true
console.log(a,b,c)
console.log(typeof(a),typeof(b),typeof(c))
a="sd"
b=233
console.log(a,b,c)
console.log(typeof(a),typeof(b),typeof(c))
// c=false --> const variable can't be modified it causes a "TypeError"

*/

// Secondary datatype -- 

console.log()
console.log("Any datatype other than primitive is implemented using OBJECT")
console.log()

/*

array = [1,3,"abc",true,[1,2]] // we can't specify that a array should accept only one specific datatype as input
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array);
console.log(typeof(array))



//Objects
//<----1st type of object declaration ---->
object1 = {
    firstname:'St.Joseph',
    "lastname":"institute of technology",
    "depts":['cse',"it","ads","ece"],
    "training":'MERN'
    
}  // key can be given within quotes or not; but values are always given  within single quotes ie> '' ;
console.log(object1)
console.log(object1.training)
console.log(object1["depts"])
console.log.apply("***1***")

//<----2nd type of obj. decl.---->
obj2 = {}
obj2["firstname"] = "hello"
obj2["lastname"] = 'sjit'
console.log(obj2)          // here if we don't use quotes it will take it as a variable only within quotes will it consider as a key within a object 
console.log(obj2['lastname'])
console.log("***2***")

//we can also assign a variable to point to a string then use this string as key in the object;
obj3 = {}
obj3["firstname"] = "hello"
lastname = "lastname"
obj3[lastname] = 'world'
console.log(obj3)  
console.log("***3***")

//<----3rd type of obj. decl.---->
obj = new Object()
obj["firstname"] = "hello"
obj['lastname'] = 'sjit'
console.log(obj)
console.log("***4***")

//<----4th type of obj. decl. ---->
obj4 = new Object()
console.log(obj4)
console.log()
obj4.first = "hello"
obj4.second = "world"
console.log(obj4)

*/

//SET

set = new Set()
console.log(set)
console.log()

set1 = new Set("hello")
console.log(set1)
console.log()

set2 = new Set()
set2.add("hello")
console.log(set2)
console.log()
set2.add("hello")
console.log(set2) // sets don't take duplicate values as input
console.log()
console.log(typeof(set))

