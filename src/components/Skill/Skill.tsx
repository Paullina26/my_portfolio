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

export const WrapperImgSkill = styled.div<{ $skillSizeStyle: string }>`
  width: 100%;
  img {
    width: ${props => props.$skillSizeStyle};
    height: ${props => props.$skillSizeStyle};
  }
`;
export const WrapperNameSkill = styled.div`
  /* padding: 10px; */
  /* background-color: #8f2828; */
`;

type SkillProps = {
  index: number | string;
  skillName: string;
  skillLogo: string;
  skillNameElement?: string;
  skillSize?: string;
};

export const Skill: React.FC<SkillProps> = ({
  index,
  skillName,
  skillLogo,
  skillNameElement,
  skillSize = '50px',
}) => {
  return (
    <WrapperSkill key={index}>
      <WrapperImgSkill $skillSizeStyle={skillSize}>
        <img src={skillLogo} alt={skillName} />
      </WrapperImgSkill>
      <WrapperNameSkill>{skillNameElement}</WrapperNameSkill>
    </WrapperSkill>
  );
};

export default Skill;
