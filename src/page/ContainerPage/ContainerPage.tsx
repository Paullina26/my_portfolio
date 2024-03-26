import AboutMe from 'page/AboutMe/AboutMe';
import styled from 'styled-components';
import MyProjects from 'page/Projects/MyProjects';
import MySkills from 'page/Skills/MySkills';
import Contact from 'page/Contact/Contact';

const Wrapper = styled.div`
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
      <Contact />
    </Wrapper>
  );
};
export default ContainerPage;
