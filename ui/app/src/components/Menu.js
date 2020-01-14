import React from 'react';
import styled from 'styled-components';
import { Link as NonStyledLink } from 'react-router-dom';

import CenterDiv from './CenterDiv';
import { colors } from '../utils/constants';

const NavBar = styled.div`
  display: flex;
  border-bottom: 3px solid ${colors.bordersColor};
  justify-content: center;
  margin: 0px 10px;
  padding: 10px 0px;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
`;

const Link = styled(NonStyledLink)`
  color: ${colors.fontColor};
  font-weight: bold;
  text-decoration: none;
  :hover {
    color: ${colors.bordersColor}
  }
`;

export default () => {
  return (
    <NavBar>
      <LinksContainer>
        <Link to='/todos'> To Dos </Link>
        <Link to='/tasks'> Tasks </Link>
        <Link to='/tasks'> Tasks </Link>
        <Link to='/tasks'> Tasks </Link>
      </LinksContainer>
    </NavBar>
  );
};
