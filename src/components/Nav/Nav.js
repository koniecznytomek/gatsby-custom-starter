import React, { useEffect, useRef, useState } from 'react';
import { Container } from './Nav.style';

const Nav = () => {
  const [toggle, setToggle] = useState('default');
  const burger = useRef();

  useEffect(() => {
    const el = burger.current;
    const toggler = () => {
      toggle === 'default' || toggle === 'close'
        ? setToggle('open')
        : setToggle('close');
    };

    el.addEventListener('click', toggler);
    return () => el.removeEventListener('click', toggler);
  });

  return (
    <Container toggle={toggle}>
      <div className="burger" ref={burger}>
        <span></span>
        <span></span>
      </div>

      <div
        className={`menu ${toggle === 'open' ? 'menu--show' : 'menu--hide'}`}
      >
        <nav className="menu__nav">
          <ul>
            <li></li>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default Nav;
