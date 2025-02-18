/* async function asAw() {
  console.log("Hello");
}
console.log(asAw());    //o/p :: Hello \n Promise {undefined} */

async function asAw() {
    setTimeout(function(){
        console.log("hello");
    },1000)
}

console.log(asAw());    //o/p :: Promise { undefined }  \n  hello