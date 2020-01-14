import React from 'react'
import styled from 'styled-components'

import {colors} from '../utils/constants'

const Label = styled.div`
  font-weight: bold;
  text-align: center;
`;
const Input = styled.input`
  border: 2px solid ${colors.bordersColor};
  background-color: ${colors.backgroundColor};
  padding: 5px;
  margin: 5px;
  border-radius: 3px;
`;

export default (props) => (
  <div>
    <Label>{props.placeholder}</Label>
    <Input {...props} />
  </div>
)