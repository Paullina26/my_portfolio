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

export const WrapperImgSkill = styled.div<{ skillSize: string }>`
  width: 100%;
  img {
    width: ${(props) => props.skillSize};
    height: ${(props) => props.skillSize};
  }
`;
export const WrapperNameSkill = styled.div`
  /* padding: 10px; */
  /* background-color: #8f2828; */
`;

type SkillProps = {
  index: number | string;
  // tu musi być "| string"? Index może być stringiem?
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
      <WrapperImgSkill skillSize={skillSize}>
        <img src={skillLogo} alt={skillName} />
      </WrapperImgSkill>
      <WrapperNameSkill>{skillNameElement}</WrapperNameSkill>
    </WrapperSkill>
  );
};

export default Skill;

// komantarze
