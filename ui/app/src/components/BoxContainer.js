import styled from 'styled-components'

import {colors} from '../utils/constants'

export default styled.div`
  background-color: ${colors.containersBackground};
  padding: ${props => props.padding || '30px 10px'};
  border: 2px solid ${colors.borders};
  border-radius: 5px;
  box-shadow: 8px 8px 15px;
  height: ${props => props.height};
  margin: ${props => props.margin || '15px 0'};
  width: ${props => props.width || '90%'};
  @media (min-width: 700px) {
    width: ${props => props.widthMD || '80%' };
  }
  @media (min-width: 968px) {
    width: ${props => props.widthLG || '50%' };
  }
`