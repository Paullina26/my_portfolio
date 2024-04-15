import GenericSwiper from 'utils/GenericSwiper';
import CardHobby from 'components/Card/CardHobby';
import { TittleSection } from 'components/atoms/TittleSection';
import { HobbyDescription } from 'DataBase/HobbyDescription';

export const AboutMe = () => {
  return (
    <div>
      <TittleSection>O mnie</TittleSection>
      <GenericSwiper data={HobbyDescription} cardComponent={CardHobby} />
    </div>
  );
};

export default AboutMe;
