import styled from 'styled-components';
import { glass_effect } from 'style/mixins';
import Skill from 'components/Skill/Skill';
import skillsData from 'DataBase/Skills';

export const WrapperCardProject = styled.div`
  ${glass_effect};
  padding: 10px;
  display: inline-block;
  width: 400px;
  height: 550px;
`;

export const TittleProject = styled.p`
  padding: 10px;
  font-size: 3rem;
`;

export const WrapperImgProject = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const WrapperDescriptionProject = styled.div`
  width: 100%;
  padding: 10px;
`;

export const WrapperTechnologiesProject = styled.div`
  width: 100%;
  padding: 10px;
`;
export const StyledSkill = styled(Skill)`
  width: 20px;
  height: 20px;
`;

type CardProjectProps = {
  projectImg: string;
  nameImg: string;
  tittleProject: string;
  descriptionProject: string;
  technologiesProject: string[];
};

export const CardProject: React.FC<CardProjectProps> = ({
  projectImg,
  nameImg,
  tittleProject,
  descriptionProject,
  technologiesProject,
}) => {
  return (
    <WrapperCardProject>
      <TittleProject>{tittleProject}</TittleProject>
      <WrapperImgProject>
        <img src={projectImg} alt={nameImg} />
      </WrapperImgProject>
      <WrapperTechnologiesProject>
        {' '}
        {technologiesProject.map((tech, index) => {
          const img = skillsData.find(el => el.name === tech);
          return (
            <Skill
              index={index}
              skillLogo={img?.logo}
              skillName={tech}
              skillSize='30px'
            />
          );
        })}
      </WrapperTechnologiesProject>
      <div>link</div>
      <WrapperDescriptionProject>
        {descriptionProject}
      </WrapperDescriptionProject>
      <div>zobacz więcej</div>
    </WrapperCardProject>
  );
};
export default CardProject;
