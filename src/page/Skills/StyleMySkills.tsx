import styled from 'styled-components';
import { glass_effect } from 'style/mixins';

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
