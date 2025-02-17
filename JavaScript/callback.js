function SJITCollege(msg,abc) {
  console.log(msg);
  abc();
}

function callbackSJIT() {
  console.log("Welcome back to SJIT");
}

SJITCollege("Welcome to sJIT",callbackSJIT);
