import AboutMe from 'page/AboutMe/AboutMe';
import styled from 'styled-components';
import MyProjects from 'page/Projects/MyProjects';
import MySkills from 'page/Skills/MySkills';

const Wrapper = styled.div`
  /* width: 90vw; */
  overflow-x: hidden;
  height: 100vh;
  text-align: center;
  margin: 10px auto;
`;

export const ContainerPage = () => {
  return (
    <Wrapper>
      <AboutMe />
      <MySkills />
      <MyProjects />
    </Wrapper>
  );
};
export default ContainerPage;
