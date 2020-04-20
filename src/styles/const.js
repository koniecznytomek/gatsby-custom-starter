import { css } from 'styled-components';

export const color = {
  grey: '#EDEDED',
  white: '#fff',
  black: '#202020',
};

export const mq = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '1200px',
  xl: '1440px',
  xxl: '1800px',
};

export const font = {
  normal: css`
    font-family: 'Nunito Sans', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 1px;

    @media (max-width: ${mq.sm}) {
      font-size: 16px;
      line-height: 24px;
    }
  `,

  small: css`
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 700;
    font-size: 10px;
    letter-spacing: 5px;
    text-transform: uppercase;
    @media (max-width: ${mq.sm}) {
      font-size: 8px;
      letter-spacing: 4px;
    }
  `,

  tiny: css`
    font: 400 10px/18px 'IBM Plex Mono', monospace;
    letter-spacing: 2px;
    @media (max-width: ${mq.sm}) {
      font-size: 8px;
    }
  `,

  logo: css`
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 800;
    font-size: 12px;
    letter-spacing: 8px;
    text-transform: uppercase;
    @media (max-width: ${mq.sm}) {
      font-size: 9px;
      letter-spacing: 6px;
    }
  `,
};

export const media = {
  xs: (...a) => css`
    @media (max-width: ${mq.xs}) {
      ${css(...a)}
    }
  `,
  sm: (...a) => css`
    @media (max-width: ${mq.sm}) {
      ${css(...a)}
    }
  `,
  md: (...a) => css`
    @media (max-width: ${mq.md}) {
      ${css(...a)}
    }
  `,
  lg: (...a) => css`
    @media (max-width: ${mq.lg}) {
      ${css(...a)}
    }
  `,
  xl: (...a) => css`
    @media (max-width: ${mq.xl}) {
      ${css(...a)}
    }
  `,
  hover: (...a) => css`
    @media not all and (hover: none) {
      ${css(...a)}
    }
  `,
};
