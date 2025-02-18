//Example - 1
/* 
function SJITCollege(msg, abc) {
  console.log(msg);
  abc();
}

function callbackSJIT() {
  console.log("Welcome back to SJIT");
}

SJITCollege("Welcome to sJIT", callbackSJIT);
 */


//Example - 2
function formSubmission(msg, cbFun) {
  if (cbFun()) {
    console.log(msg);
  } else {
    console.log("Form Submission Unsuccessful");
  }
}

function formValidation() {
  console.log("Form Validation Successful");
  return false;
}

formSubmission("Form Submitted Sucessfully", formValidation);

