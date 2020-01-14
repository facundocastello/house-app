import styled from 'styled-components';

import {colors} from '../utils/constants'

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 2px solid ${colors.bordersColor};
  background-color: ${colors.cardsBackground};
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  min-width: 200px;
  flex: 0 0 90%;
  @media screen and (min-width: 768px) {
    flex: 0 0 31%;
  }
`;
