import * as S from './StyleMySkills';
import skillsData from 'DataBase/Skills';

export const MySkills = () => {
  return (
    <S.WrapperSkills>
      {skillsData.map((skill, index) => (
        <S.WrapperSkill key={index}>
          <S.WrapperImgSkill>
            <img src={skill.logo} alt={skill.name} />
          </S.WrapperImgSkill>
          <S.WrapperNameSkill>{skill.name}</S.WrapperNameSkill>
        </S.WrapperSkill>
      ))}
    </S.WrapperSkills>
  );
};

export default MySkills;
