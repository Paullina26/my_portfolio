import styled from 'styled-components';
import { glass_effect } from 'style/mixins';

export const WrapperSkills = styled.div`
  ${glass_effect};
  margin: 10px;
  display: flex;
  justify-content: space-around;
  padding: 0 20px;
  width: 102vw;
  margin-left: -1vw;
  /* font-size: 2.5rem; */
  /* padding: 10px; */
`;

export const WrapperSkill = styled.div`
  padding: 10px;
  display: inline-block;
  text-align: center;
  /* justify-content: center; */
  /* margin: auto; */
`;

export const WrapperImgSkill = styled.div`
  width: 100%;
  img {
    width: 50px;
    height: 50px;
  }
`;
export const WrapperNameSkill = styled.div`
  /* padding: 10px; */
  /* background-color: #8f2828; */
`;
