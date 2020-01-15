import styled from 'styled-components';

import { colors } from '../utils/constants';

export default styled.div`
  padding: 10px 20px;
  background-color: ${(props) =>
    props.styleType ? colors[props.styleType] : colors.borders};
  border-radius: 4px;
  box-shadow: 2px 2px 4px;
  color: ${colors.antiFlashWhite};
  font-weight: bold;
  text-transform: capitalize;
  margin: 1px 5px;
    border: 2px solid ${colors.background};
  :hover {
    border: 2px solid
      ${(props) => (props.styleType ? colors[props.styleType] : colors.borders)};
    color: ${(props) =>
      props.styleType ? colors[props.styleType] : colors.borders};
    background-color: ${colors.background};
  }
`;
