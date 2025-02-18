/* function promiseEg() {
    return new Promise ((resolve,reject)=>{
        resolve("The promise is resolved")
    })
}

//promiseEg() // *No output bc no print statement*

console.log(promiseEg()) //o/p :: Promise { 'The promise is resolved' } */
/*
function promiseEg(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("The promise is resolved")
        },5000)
    })
}
console.log(promiseEg()) // o/p :: Promise { <pending> } [because the console.log is expecting something from promise]

promiseEg().then(()=>{
    console.log(res)
})
    //o/p :: reference error only after the time mentioned in setTimeOut [here it waits for the specified time for res then finally throws error]

promiseEg().then((res)=>{
    console.log(res)
})
    //o/p :: Promise { <pending> } \n The promise is resolved
 

function promiseEg(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve("The promise is resolved");
      } else {
        reject("The promise is not resolved because the value is unmet");
      }
    }, 1000);
  });
}

promiseEg(true).then((res) => {
  console.log(res);
});     //o/p ::The promise is resolved
  

promiseEg(false).then((res)=>{
    console.log(res)
}).catch((res)=>{
    console.log(res)
})
// o/p :: The promise is not resolved because the value is unmet (it is necessary to specify 'catch()' while handling reject)
*/

//Location Finder
// 1. Promise(LocFound,LocNotFound)
// 2. Loc:chennai, TimeOut:2000

function locationFinder(loc, time) {
  var location = new Promise((locFound, locNotFound) => {
    setTimeout(() => {
      if (islocationFound(loc, time)) {
        locFound(loc+" is found");
      } else {
        locNotFound(loc+" not found");
      }
    }, time);
  });

  location
    .then((found) => {
      console.log(found);
    })
    .catch((notFound) => {
      console.log(notFound);
    });
}

islocationFound = (loc, time) => {
  location = "Chennai";
  t = 1000;
  if (loc === location && t <= time) {
    return true;
  } else {
    return false;
  }
};

locationFinder("Chennai", 2000);
