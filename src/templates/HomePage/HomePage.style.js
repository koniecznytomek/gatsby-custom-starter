import styled from 'styled-components';
import { media, font } from '../../styles/const';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows:
    [free-space] 0
    [hero] auto;
  ${media.md` grid-template-rows:
    [free-space] 25px
    [hero] auto
   `};

  `;
