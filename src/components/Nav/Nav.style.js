import styled, { css, keyframes } from 'styled-components';
import { media, color, font } from '../../styles/const.js';

export const Container = styled.div`
  .burger {
    position: fixed;
    top: 90px;
    right: 100px;
    padding: 10px;
    cursor: pointer;
    z-index: 100;

    ${media.md`
     top: 52px;
     right: 60px;
    `};

    ${media.sm`
     top: 48px;
     right: 25px;
    `};
  }
  span {
    width: 14px;
    height: 2px;
    display: block;
    margin: 4px 0;
    background: ${color.black};
    transition: transform 0.9s cubic-bezier(0.83, 0, 0.17, 1);
  }

  @keyframes menuIn {
    from {
    }

    to {
    }
  }

  @keyframes menuOut {
    from {
    }

    to {
    }
  }

  @keyframes burgerOn {
    from {
    }

    to {
    }
  }

  @keyframes burgerOff {
    from {
    }

    to {
    }
  }
`;
