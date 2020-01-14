import styled from 'styled-components'

import {colors} from '../utils/constants'

export default styled.div`
  align-items: center;
  margin: '10px 0px';
  display: flex;
  width: 100%;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`