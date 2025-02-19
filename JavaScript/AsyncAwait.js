/* async function asAw() {
  console.log("Hello");
}
console.log(asAw());    //o/p :: Hello \n Promise {undefined} */

/*
async function asAw() {
    setTimeout(function(){
        console.log("hello");
    },1000)
}

 console.log(asAw());    //o/p :: Promise { undefined }  \n  hello

asAw().then((res)=>{
  console.log(res)
}).catch((res)=>{
  console.log("res")
}) 


  async function asAw() {
    var a = 7;
    setTimeout(function(){
        console.log("hello");
    },1000)
    console.log(await a);
}

asAw();

//when the await func. is used in "console.log" we get the o/p :: 'Promise {undefined}' //bc. func. is type void// else if we simply call the func. we get o/p :: 'undefined'

*/

//Instagram console Demo for post, like, comment, share

likeCode = async () => {
  return new Promise((likePost,unlikePost) => {
    setTimeout(() => {
      likePost("Liked the Post successfully");
    }, 5000);
  });
};

commentCode = async () => {
  return new Promise((commentPost) => {
    setTimeout(() => {
      commentPost("Comment the Post successfully");
    }, 5000);
  });
};

shareCode = async () => {
  return new Promise((sharePost) => {
    setTimeout(() => {
      sharePost("Shared the Post successfully");
    }, 5000);
  });
};

async function postCode() {
  var post = new Promise((createPost) => {
    setTimeout(() => {
      createPost("Post created successfully");
    }, 5000);
  });

  /* console.log(await post);
  console.log(await likeCode());
  console.log(await commentCode());
  console.log(await shareCode());
  // In this each await takes individual 5sec to run each set of code in total of 20sec */

  const [pos, like, comment, share] = await Promise.all([
    post,
    likeCode(),
    commentCode(),
    shareCode(),
  ]);   //This is to give an overall await func. for all the callling hence the entire execution takes 5sec

  console.log(pos);
  console.log(like);
  console.log(comment);
  console.log(share);
  
}
postCode();
