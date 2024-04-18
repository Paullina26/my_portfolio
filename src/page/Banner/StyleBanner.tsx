import styled from 'styled-components';
import { glass_effect, glass_effect_button } from 'style/mixins';

export const BannerWrapper = styled.div`
  margin-top: 20px;
`;

export const WrapperTextBanner = styled.div`
  @media (max-width: 414px) {
    min-height: 220px;
  }
`;

export const Photo = styled.div`
  ${glass_effect};
  margin: 20px auto;
  padding: 20px;
  width: 200px;
  height: 200px;
`;

export const WrapperNameAndSkills = styled.div`
  font-size: 2.5rem;
`;

export const Name = styled.h1`
  font-family: 'Petit Formal Script';
  font-weight: 100;
  font-size: 6rem;
`;

export const WrapperLinkContact = styled.div`
  margin: auto;
  margin-top: 5px;
  width: 450px;
  @media (max-width: 450px) {
    width: 350px;
  }
`;

export const LinkWrapper = styled.div`
  ${glass_effect_button};
  border-radius: 15px;
  margin: 5px;
  width: 120px;
  position: relative;
  overflow: hidden;
  display: inline-block;
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
  @media (max-width: 450px) {
    margin: 5px;
    width: 100px;
  }
`;
