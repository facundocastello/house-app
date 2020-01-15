import styled from 'styled-components';

import { colors } from '../utils/constants';

export default styled.div`
  text-align: ${(props) => props.center && 'center'};
  font-weight: ${(props) => props.bold && 'bold'};
  font-size: ${(props) =>
    props.fontSm ? '.8em' : props.fontLg && '1.2em'};
  flex: 0 0 ${(props) => (props.column ? `${100 / props.column - 1}%` : '35%')};
  text-transform: capitalize;
`;
