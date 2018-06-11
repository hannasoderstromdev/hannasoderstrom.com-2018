import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Icon from '../../Icon'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding-top: 1rem;

  & ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & li {
    margin: 0 1rem;
  }

  & a {
    & :hover {
      border-bottom: 4px solid white;
    }
  }

  @media (min-width: 540px) {
    padding: 0;
  }
`

const HomeLinkWithActive = styled(Link)`
  color: ${({ active }) =>
    active === 'active' ? '#fff' : 'rgba(255, 255, 255, 0.65)'};
  text-decoration: none;
  border-bottom: ${({ active }) =>
    active === 'active' ? '4px solid white' : ''};
`

const LinkWithActive = HomeLinkWithActive.extend`
  padding-bottom: 0.375rem;
`

const MainNavigation = () => (
  <Nav>
    <ul>
      <li>
        <HomeLinkWithActive
          active={window.location.pathname === '/' ? 'active' : ''}
          data-test="home-link"
          to="/"
        >
          <Icon name="home" />
        </HomeLinkWithActive>
      </li>
      <li>
        <LinkWithActive
          active={window.location.pathname === '/recently' ? 'active' : ''}
          data-test="recently-link"
          to="/recently"
        >
          Recently
        </LinkWithActive>
      </li>
      <li>
        <LinkWithActive
          active={window.location.pathname === '/experience' ? 'active' : ''}
          data-test="experience-link"
          to="/experience"
        >
          Experience
        </LinkWithActive>
      </li>
      <li>
        <LinkWithActive
          active={window.location.pathname === '/contact' ? 'active' : ''}
          data-test="contact-link"
          to="/contact"
        >
          Contact
        </LinkWithActive>
      </li>
    </ul>
  </Nav>
)

export default MainNavigation
