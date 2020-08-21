import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  min-height: 90vh;
  background: ${props => props.Bg || '#fafafa'};
`;

const Col = props => {
  const [state, setState] = useState(false);
  const [elem, setElem] = useState(null);

  const ref = useRef(
    new IntersectionObserver(item => {
      item[0].isIntersecting ? setState(true) : setState(false);
    })
  );

  useEffect(() => {
    if (elem) ref.current.observe(elem);
  });

  return (
    <Container ref={setElem} Bg={props.Bg}>
      {props.children}
    </Container>
  );
};

export default Col;
