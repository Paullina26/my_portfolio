import styled from 'styled-components';
import { glass_effect } from 'style/mixins';
import { TittleSection } from 'components/atoms/TittleSection';
import { glass_effect_button } from 'style/mixins';

export const WrapperContact = styled.div`
  width: 100%;
  margin: 10px auto 50px auto;
  h2 {
    font-size: 5rem;
    margin: 30px auto;
  }
`;

export const LinkWrapper = styled.div`
  ${glass_effect_button};
  border-radius: 15px;
  margin: 10px auto;
  width: 200px;
  position: relative;
  overflow: hidden;
  a {
    display: block;
    padding: 10px;
    font-family: 'Jura', sans-serif;
    font-size: 2rem;
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

export const WrapperContactElement = styled.div`
  ${glass_effect};
  margin: 10px auto;
  padding: 20px;
  max-width: 600px;
`;

export const Contact = () => {
  return (
    <WrapperContact>
      <TittleSection>Kontakt</TittleSection>
      <WrapperContactElement>
        <p>paulina2651997@gmail.com</p>
        <LinkWrapper>
          <a href='mailto:paulina2651997@gmail.com'>Wyślij wiadomość</a>
        </LinkWrapper>
        <LinkWrapper>
          <a href='https://www.linkedin.com/in/paulina-golenia26/'>Linkedin</a>
        </LinkWrapper>
      </WrapperContactElement>
    </WrapperContact>
  );
};

export default Contact;
