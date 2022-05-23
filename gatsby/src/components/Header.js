import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GiButterfly } from 'react-icons/gi';

const Header = () => (
  <Container>
    <Wrapper>
      <Link to="/">
        <h1>
          <GiButterfly /> Travel Blog
        </h1>
      </Link>
    </Wrapper>
  </Container>
);

export default Header;

const Container = styled.header`
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 4px;
  display: flex;
`;
const Wrapper = styled.div`
  padding: 20px;
  h1 {
    font-size: 20px;
    font-family: 'HopeClub';
    font-style: italic;
    font-weight: 700;
    margin: 0;
    display: flex;
    align-items: center;
  }
  a {
    color: ${props => props.theme.black};
    text-decoration: none;
    svg {
      fill: ${props => props.theme.green};
      width: 40px;
      height: 40px;
    }
  }
`;
