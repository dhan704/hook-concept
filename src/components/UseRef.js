import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const refObj = useRef();
  const prevName = useRef("");

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  const handleBtnClick = () => {
    refObj.current.focus(); // accessing input from the real DOM using useRef(), and focus the cursor.
  };
  return (
    <div>
      <input
        ref={refObj}
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
      <div>Previous input is {prevName.current}</div>
      <button onClick={handleBtnClick}>Focus</button>
      <div>I rendered {renderCount.current} times</div>
    </div>
  );
}

export default UseRef;
