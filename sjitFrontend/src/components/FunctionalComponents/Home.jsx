/* function Home({msg}) {  // Here the props is given as object 
  var styling = {
    textAlign:"center",
    backgroundColor:"blue",
    color:"white"
  }
  
  return (
    <div>
      <h1 style={styling}>Home</h1>
      <h3>The next line is a Props</h3>
      
      <h3>Props :: {msg}</h3>
    </div>
  );
}

export default Home;
 */

function Home(props) {
  var styling = {
    textAlign: "center",
    backgroundColor: "blue",
    color: "white",
  };
  //var a =10;
  return (
    <div>
      <h1 style={styling}>Home</h1>
      <h3>The next line is a Props</h3>
      {/* {console.log("hello")}
      <h3>Prop :: {a}</h3> */}
      <h3>
        Props :: {props.msg} {props.msg1}
      </h3>
    </div>
  );
  // Here msg & msg1 is the key of the object is props ;
}

export default Home;
