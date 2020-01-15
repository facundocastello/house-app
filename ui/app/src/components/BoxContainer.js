import React from 'react';
import styled from 'styled-components';

import { colors } from '../utils/constants';
import HorizontalCenter from './HorizontalCenter';

const BoxContainer = styled.div`
  background-color: ${colors.containersBackground};
  padding: ${(props) => (!props.showContent && props.padding) || '10px 0px'};
  border: 2px solid ${colors.borders};
  border-radius: 5px;
  box-shadow: 8px 8px 15px;
  height: ${(props) => props.height};
  margin: ${(props) => props.margin || '10px 5px'};
  width: ${(props) => props.width || '90%'};
  @media (min-width: 700px) {
    width: ${(props) => props.widthMD || '80%'};
  }
  @media (min-width: 968px) {
    width: ${(props) => props.widthLG || '50%'};
  }
`;

const H2 = styled.h2`
  margin: ${(props) => !props.showContent && '0px'};
`;

export default ({ children, title, showContent, triggerContent, ...props }) => (
  <BoxContainer {...props}>
    {title && (
      <HorizontalCenter>
        <H2 showContent={showContent}>{title}</H2>
        <div onClick={triggerContent}>
          {showContent ? <H2>c</H2> : <H2>a</H2>}
        </div>
      </HorizontalCenter>
    )}

    {showContent && children}
  </BoxContainer>
);
