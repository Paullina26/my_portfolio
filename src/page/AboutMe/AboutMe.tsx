import GenericSwiper from 'utils/GenericSwiper';
import CardHobby from 'components/Card/CardHobby';
import { TittleSection } from 'components/atoms/TittleSection';
import { HobbyDescription } from 'DataBase/HobbyDescription';
import styled from 'styled-components';

export const WrapperMyHobby = styled.div`
  /* overflow-x: hidden; */
  /* max-height: 100vh; */
  /* width: 100vw; */
  text-align: center;
  width: 100%;
  margin: 0 auto;
`;

export const AboutMe = () => {
  return (
    <WrapperMyHobby>
      <TittleSection>O mnie</TittleSection>
      <GenericSwiper data={HobbyDescription} cardComponent={CardHobby} />
    </WrapperMyHobby>
  );
};

export default AboutMe;
