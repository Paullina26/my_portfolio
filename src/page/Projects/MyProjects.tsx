import CardProject from 'components/Card/CardProject';
import { DataMyProjects } from 'DataBase/Project';
import { TittleSection } from 'components/atoms/TittleSection';
import GenericSwiper from 'utils/GenericSwiper';
import styled from 'styled-components';

export const WrapperMyProjects = styled.div`
  /* overflow-x: hidden; */
  text-align: center;
  width: 100%;
  margin: 0 auto;
`;

export const MyProjects = () => {
  return (
    <WrapperMyProjects>
      <TittleSection>Projekty</TittleSection>
      <GenericSwiper data={DataMyProjects} cardComponent={CardProject} />
    </WrapperMyProjects>
  );
};

export default MyProjects;
