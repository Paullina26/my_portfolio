import styled from 'styled-components';
import { glass_effect } from 'style/mixins';

export const AboutMeWrapper = styled.div`
  margin-top: 20px;
  padding: 20px;
  /* ${glass_effect}; */
  /* min-height: 350px; */
  /* min-width: 50px; */
`;

export const GlassContainer = styled.div`
  ${glass_effect};
  min-height: 50px;
  min-width: 50px;
  max-width: 60vw;
`;

export const WrapperDescription = styled.div`
  ${glass_effect};
  font-size: 1.8rem;
  margin: 20px auto;
  padding: 20px;
  min-width: 50px;
  max-width: 60vw;
`;

export const WrapperSkills = styled.div`
  ${glass_effect};
  /* font-size: 2.5rem; */
  /* padding: 10px; */
`;

export const WrapperSkill = styled.div`
  padding: 10px;
  display: inline-block;
  text-align: center;
  justify-content: center;
`;

export const WrapperImgSkill = styled.div`
  width: 50px;
  height: 50px;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const WrapperNameSkill = styled.div`
  /* padding: 10px; */
  /* background-color: #8f2828; */
`;

export const Photo = styled.div`
  ${glass_effect};
  margin: 20px auto;
  padding: 20px;
  width: 200px;
  height: 200px;
`;

export const WrapperNameAndSkills = styled.div`
  font-size: 2.5rem;
`;

export const Name = styled.h1`
  font-family: 'Petit Formal Script';
  font-weight: 100;
  font-size: 6rem;
`;
