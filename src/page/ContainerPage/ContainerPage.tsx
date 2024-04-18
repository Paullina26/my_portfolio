import Banner from 'page/Banner/Banner';
import styled from 'styled-components';
import MyProjects from 'page/Projects/MyProjects';
import SliderIconHorizontalInfinity from 'components/SliderIconHorizontalInfinity/SliderIconHorizontalInfinity';
import Contact from 'page/Contact/Contact';
import AboutMe from 'page/AboutMe/AboutMe';
import skillsData from 'DataBase/Skills';
import hobbyIconData from 'DataBase/Hobbys';

const Wrapper = styled.div`
  text-align: center;
  margin: 10px auto;
`;

export const ContainerPage = () => {
  return (
    <Wrapper>
      <Banner />
      <SliderIconHorizontalInfinity items={skillsData} iconSize='50px' />
      <MyProjects />
      <SliderIconHorizontalInfinity items={hobbyIconData} iconSize='50px' />
      <AboutMe />
      <Contact />
    </Wrapper>
  );
};
export default ContainerPage;
