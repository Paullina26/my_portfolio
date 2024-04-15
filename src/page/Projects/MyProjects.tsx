import CardProject from 'components/Card/CardProject';
import { DataMyProjects } from 'DataBase/Project';
import { TittleSection } from 'components/atoms/TittleSection';
import GenericSwiper from 'utils/GenericSwiper';

export const MyProjects = () => {
  return (
    <div>
      <TittleSection>Projekty</TittleSection>
      <GenericSwiper data={DataMyProjects} cardComponent={CardProject} />
    </div>
  );
};

export default MyProjects;
