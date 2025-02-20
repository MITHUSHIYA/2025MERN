import { useState } from "react";

function About() {

    var initialVal =0;
    var [num,setNum] = useState(initialVal);

    function valDecrement(){
      setNum(num-1)
    }
    //Here setNum() is the main func. valDecrement is a subfunc. hence the subfunc. act as control

    return (
      <div>
        <h1>About</h1>
        <h3>The initial state value :: {initialVal}</h3>
        <button onClick={valDecrement}>-</button>
        <h3>The updated state value :: {num}</h3>
        <button onClick={() => setNum(num+1)}>+</button>
        {/*here the autonomous func. [()=>] act as control*/}
        <button onDoubleClick={()=>setNum(initialVal)}>Reset</button>
        <br />
      </div>
    );
  }
  
  export default About;
  