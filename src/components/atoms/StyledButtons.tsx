import styled from 'styled-components';
import { glass_effect_button } from 'style/mixins';

export const LinkProject = styled.div`
  ${glass_effect_button};
  border-radius: 15px;
  margin: 10px auto;
  width: 180px;
  position: relative;
  overflow: hidden;

  a {
    display: block;
    padding: 10px;
    font-family: 'Jura', sans-serif;
    font-size: 1.6rem;
    color: white;
    text-decoration: none;
    z-index: 20;
  }

  :before {
    background: #fff;
    content: '';
    height: 155px;
    left: -75px;
    opacity: 0.2;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: -10;
  }

  :hover {
    text-decoration: none;
    &:before {
      left: 110%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
`;

export const Button = styled.button`
  ${glass_effect_button};
  border-radius: 15px;
  margin: 10px auto;
  width: 200px;
  position: relative;
  overflow: hidden;
  color: white;
  font-family: 'Jura', sans-serif;
  padding: 10px;
  font-size: 2rem;

  :before {
    background: #fff;
    content: '';
    height: 155px;
    left: -75px;
    opacity: 0.2;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: -10;
  }

  :hover {
    text-decoration: none;
    &:before {
      left: 110%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
`;
