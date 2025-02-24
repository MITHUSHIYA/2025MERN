import { memo, useState } from "react";

const TextFile = () => {
  var [Text, setText] = useState("");
  return (
    <div>
      <h2>This is a Text box</h2>
      <input
        type="Text"
        value={Text}
        onChange={(e) => setText(e.target.value)}
      />
      <h3>This is {Text}</h3>
    </div>
  );
};
export default memo(TextFile);
