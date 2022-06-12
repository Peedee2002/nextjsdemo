import React, { useState } from 'react';
const Hi = () => {
  const [counter, setCounter] = useState("hi");
  const handleOnClick = () => {
    setCounter((c) => c + "i");
  };
  return (
    <>this is about</>
  );
}

export default Hi;
