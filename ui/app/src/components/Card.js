import React from 'react';
import styled from 'styled-components';

import { colors } from '../utils/constants';
import Button from './Button';

const Card = styled.div`
  border-radius: 5px;
  border: 2px solid ${colors.borders};
  background-color: ${colors.cardsBackground};
  box-shadow: 5px 5px 10px;
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 90%;
  margin: 10px 5px;
  min-width: 200px;
  justify-content: center;
  padding: 5px;
  @media (min-width: 468px) {
    flex: 0 0 44%;
  }
  @media (min-width: 968px) {
    flex: 0 0 31%;
  }
`;

const ButtonsContainer = styled.div`
  margin: 10px 10px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export default ({
  children,
  successButton,
  primaryButton,
  infoButton,
  secondaryButton,
  warningButton,
  dangerButton,
  successClicked,
  primaryClicked,
  infoClicked,
  secondaryClicked,
  warningClicked,
  dangerClicked,
  ...props
}) => (
  <Card {...props}>
    {children}
    <ButtonsContainer>
      {successButton && <Button onClick={successClicked} styleType='success'> {successButton} </Button>}
      {primaryButton && <Button onClick={primaryClicked} styleType='primary'> {primaryButton} </Button>}
      {infoButton && <Button onClick={infoClicked} styleType='info'> {infoButton} </Button>}
      {secondaryButton && <Button onClick={secondaryClicked} styleType='secondary'> {secondaryButton} </Button>}
      {warningButton && <Button onClick={warningClicked} styleType='warning'> {warningButton} </Button>}
      {dangerButton && <Button onClick={dangerClicked} styleType='danger'> {dangerButton} </Button>}
    </ButtonsContainer>
  </Card>
);
