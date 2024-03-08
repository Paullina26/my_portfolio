import * as S from './StyleMySkills';
import skillsData from 'DataBase/Skills';
import Skill from 'components/Skill/Skill';

export const MySkills = () => {
  return (
    <S.WrapperSkills>
      {skillsData.map((skill, index) => (
        <Skill
          key={index}
          index={index}
          skillName={skill.name}
          skillLogo={skill.logo}
        />
      ))}
    </S.WrapperSkills>
  );
};

export default MySkills;
