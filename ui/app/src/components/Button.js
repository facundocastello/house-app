import styled from 'styled-components'

import {colors} from '../utils/constants'

export default styled.div`
  padding: 10px 20px;
  text-transform: capitalize;
  background-color: ${colors.bordersColor};
  border-radius: 4px;
  color: ${colors.antiFlashWhite};
  font-weight: bold;
  margin: 1px;
  :hover{
    margin: 0;
    border: 1px solid ${colors.bordersColor};
    color: ${colors.bordersColor};
    background-color: ${colors.backgroundColor};
  }
`