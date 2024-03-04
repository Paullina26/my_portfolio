import AboutMe from 'page/AboutMe/AboutMe';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 90vw;
  height: 100vh;
  text-align: center;
  margin: 10px auto;
`;

export const ContainerPage = () => {
  return (
    <Wrapper>
      <AboutMe />
    </Wrapper>
  );
};
export default ContainerPage;
