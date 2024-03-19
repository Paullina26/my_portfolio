import styled from 'styled-components';
import { glass_effect, glass_effect_button } from 'style/mixins';
import Skill from 'components/Skill/Skill';
import skillsData from 'DataBase/Skills';

export const WrapperCardProject = styled.div`
  ${glass_effect};
  padding: 20px;
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
  padding: 0 10px;
`;

export const WrapperTechnologiesProject = styled.div`
  padding: 10px 0px 0px 0px;
`;
export const StyledSkill = styled(Skill)`
  width: 20px;
  height: 20px;
`;

export const LinkToProject = styled.a`
  /* width: 20px;
  height: 20px; */
  ${glass_effect_button};
  font-family: 'Jura', sans-serif;
  font-size: 2rem;
  color: white;
  text-decoration: none;
  margin: 20px;
  padding: 10px;
  border-radius: 15px;
  top: 20px;
`;

type CardProjectProps = {
  projectImg: string;
  nameImg: string;
  tittleProject: string;
  descriptionProject: string;
  technologiesProject: string[];
  link: string;
};

export const CardProject: React.FC<CardProjectProps> = ({
  projectImg,
  nameImg,
  tittleProject,
  descriptionProject,
  technologiesProject,
  link,
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
      <WrapperDescriptionProject>
        {descriptionProject}
      </WrapperDescriptionProject>
      <LinkToProject href={link}>{tittleProject}</LinkToProject>
    </WrapperCardProject>
  );
};
export default CardProject;
