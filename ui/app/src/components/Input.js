import React from 'react';
import styled from 'styled-components';

import { colors } from '../utils/constants';

const Label = styled.div`
  font-weight: bold;
  text-align: center;
`;

const Text = styled.input`
  border: 2px solid ${colors.borders};
  background-color: ${colors.background};
  padding: 5px;
  margin: 5px;
  width: 170px;
  border-radius: 3px;
`;

const TextArea = styled.textarea`
  border: 2px solid ${colors.borders};
  background-color: ${colors.background};
  padding: 5px;
  margin: 5px;
  width: 170px;
  border-radius: 3px;
`;

export default (props) => {
  let Component = '';
  switch (props.type) {
    case 'textarea':
      Component = TextArea;
      break;
    default:
      Component = Text;
  }

  return (
    <div>
      <Label>{props.placeholder}</Label>
      <Component {...props} />
    </div>
  );
};
