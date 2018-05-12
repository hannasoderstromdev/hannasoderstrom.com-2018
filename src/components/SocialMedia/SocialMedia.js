import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  background: #3a1c71;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  & ul {
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  & a {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
`
const Icon = styled.i`
  font-size: 3rem;
  color: #fff;
  margin-right: 1rem;
`

const SocialMedia = () => (
  <Section>
    <ul>
      <li>
        <a href="#">
          <Icon className="fab fa-github" /> Github
        </a>
      </li>
      <li>
        <a href="#">
          <Icon className="fab fa-linkedin" /> LinkedIn
        </a>
      </li>
      <li>
        <a href="#">
          <Icon className="fab fa-medium" /> Medium
        </a>
      </li>
    </ul>
  </Section>
)

export default SocialMedia
