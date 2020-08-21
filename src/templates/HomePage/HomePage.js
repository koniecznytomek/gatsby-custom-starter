import React, { useState } from 'react';

const Slider = props => {
  const [state, setState] = useState(0);

  const length = props.children.length;

  const handler = () => {
    state < length - 1 ? setState(state + 1) : setState(0);
  };

  if (typeof length !== 'undefined') {
    return (
      <>
        <div onClick={handler}>
          {props.children.map((a, i) => {
            return state === i && <div key={i}>{a}</div>;
          })}
        </div>
      </>
    );
  }
  return <div>{props.children}</div>;
};

export default Slider;
