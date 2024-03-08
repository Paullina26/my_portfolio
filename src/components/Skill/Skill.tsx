import styled from 'styled-components';
import { glass_effect } from 'style/mixins';
import skillsData from 'DataBase/Skills';

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

type SkillProps = {
  index: number | string;
  skillName?: string;
  skillLogo: string;
};

export const Skill: React.FC<SkillProps> = ({
  index,
  skillName,
  skillLogo,
}) => {
  return (
    <WrapperSkill key={index}>
      <WrapperImgSkill>
        <img src={skillLogo} alt={skillName} />
      </WrapperImgSkill>
      <WrapperNameSkill>{skillName}</WrapperNameSkill>
    </WrapperSkill>
  );
};

export default Skill;
