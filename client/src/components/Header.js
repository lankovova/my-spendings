import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from 'grommet';
import styled from 'styled-components';

const HeaderWrapper = styled.nav`
  margin: 0 -5px;
`;

const HeaderItem = styled.span`
  padding: 0 5px;
`;

function Header() {
  return (
    <Box>
      <HeaderWrapper>
        <HeaderItem>
          <Link to="/">Home</Link>
        </HeaderItem>
        <HeaderItem>
          <Link to="/login">Login</Link>
        </HeaderItem>
      </HeaderWrapper>
    </Box>
  );
}

export default Header;
