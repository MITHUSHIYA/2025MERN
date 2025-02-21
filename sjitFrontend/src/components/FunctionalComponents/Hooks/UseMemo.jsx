import { useState, useMemo } from "react";

function slowFunction(num) {
  for (var i = 0; i < 100000000; i++) {} //here if i<10000000000 then we observe that the page loading is slow
  return num * 2;
}

const UseMemo = () => {
  var [number, setNumber] = useState(0);
  var [theme, setTheme] = useState(false);
  var styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  var doublingOfNum = useMemo(() => {
    return slowFunction(number);
  });
  return (
    <>
      <div style={styling}>
        <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
        <h1>This is an useMemo example</h1>
        Number box :{" "}
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <h2>The number is {number}</h2>
        <h2>The number is {doublingOfNum}</h2>
      </div>
    </>
  );
};

export default UseMemo;
