import styled from 'styled-components'

import {colors} from '../utils/constants'

export default styled.div`
  background-color: ${colors.containersBackground};
  padding: ${props => props.padding || '30px 10px'};
  border: 2px solid ${colors.bordersColor};
  border-radius: 5px;
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin || '30px 0'};
  @media screen and (min-width: 468px) {
    width: ${props => props.widthMD };
  }
  @media screen and (min-width: 968px) {
    width: ${props => props.widthLG };
  }
`