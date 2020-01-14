import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '../utils/constants';

const Label = styled.div`
  font-weight: bold;
  text-align: center;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const checkedStyles = css`
  background-color: ${colors.backgroundColor};
`;
const uncheckedStyles = css`
  background-color: ${colors.backgroundColor};
`;

const Icon = styled.svg`
  fill: none;
  stroke: ${colors.bordersColor};
  stroke-width: 4px;
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const StyledCheckbox = styled.div`
  margin: 10px;
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  transition: all 150ms;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px ${colors.bordersColor};
  }
  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
  ${(props) => (props.checked ? checkedStyles : uncheckedStyles)};
`;

export default ({ className, checked, ...props }) => (
  <div>
    <Label>{props.placeholder}</Label>
    <label>
      <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
          <Icon viewBox='0 0 24 24'>
            <polyline points='20 6 9 17 4 12' />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
    </label>
  </div>
);
