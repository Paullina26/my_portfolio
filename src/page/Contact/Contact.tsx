import styled from 'styled-components';
import { glass_effect } from 'style/mixins';

export const WrapperContact = styled.div`
  margin: 10px;
  h2 {
    font-size: 5rem;
    margin: 30px auto;
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
      <h2>Kontakt</h2>
      <WrapperContactElement>
        <p>MEIL:</p>
        {/* literówka */}
        <p>paulina2651997@gmail.com</p>
      </WrapperContactElement>
    </WrapperContact>
  );
};

export default Contact;
