import React, { useLayoutEffect, useRef, useState } from "react";

export const LayoutEffect = () => {
  const textAreaRef = useRef();

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setWidth(textAreaRef.current.clientWidth);
    setHeight(textAreaRef.current.clientHeight);
    console.log(textAreaRef);
  });

  const handleTextAreaClick = () => {
    setWidth(0);
  };

  return (
    <div>
      <h1>useLayoutEffect Example</h1>
      <p>Height of TextArea is {height}</p>
      <p>Width of Text Area is {width}</p>
      <textarea ref={textAreaRef} onClick={handleTextAreaClick} />
    </div>
  );
};
