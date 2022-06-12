import React, { useState } from 'react';
import Dropdown from '../../components/dropdown/dropdown';
const Hi = () => {
  const [counter, setCounter] = useState("hi");

  const [show, setShow] = useState(false);

  const handleOnClick = () => {
    setShow((s) => !s);
  };
  return (
    <>
      <h1> Hi </h1>
      <button onClick={handleOnClick} />
      <>{show ? <Dropdown list={['eggs', 'bacon', 'ham']} /> : null }</>
      <>{<Dropdown list={['cheese']} />}</>
    </>
  );
}

export default Hi;
