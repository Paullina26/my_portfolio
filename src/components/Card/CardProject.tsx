import styled from 'styled-components';
import { glass_effect, glass_effect_button } from 'style/mixins';
import Icon from 'components/Icon/Icon';
import skillsData from 'DataBase/Skills';
import { AnimatedShiningBar } from 'components/atoms/AnimatedShiningBar';
import { LinkProject } from 'components/atoms/StyledButtons';
import ProjectIMG from 'DataBase/ProjectIMG';

export const WrapperCardProject = styled.div`
  ${glass_effect};
  padding: 20px;
  display: inline-block;
  width: 310px;
  max-width: 90vw;
  height: 600px;
`;

export const TittleProject = styled.p`
  padding: 5px;
  font-size: 3rem;
`;

export const WrapperImgProject = styled.div`
  width: 100%;
  img {
    width: 90%;
    border: 5px inset rgba(0, 0, 0, 0.35);
    border-radius: 15px;
  }
`;

export const WrapperDescriptionProject = styled.div`
  padding: 0;
`;

export const WrapperTechnologiesProject = styled.div`
  padding: 0;
`;
export const StyledSkill = styled(Icon)`
  /* width: 20px; */
  /* height: 20px; */
`;
export const WrapperLinkProject = styled.div`
  margin: 5px auto;
`;

type CardProjectProps = {
  projectPhoto?: string[];
  namePhoto?: string;
  title: string;
  description: string;
  technologies?: string[];
  link?: string;
  github?: string;
};

export const CardProject: React.FC<CardProjectProps> = ({
  projectPhoto,
  namePhoto,
  title,
  description,
  technologies,
  link,
  github,
}) => {
  return (
    <WrapperCardProject>
      <TittleProject>{title}</TittleProject>
      <AnimatedShiningBar />
      <WrapperImgProject>
        {' '}
        {projectPhoto?.map((photo, index) => {
          const img = ProjectIMG.find(el => el.name === photo);
          return <img key={photo} src={img?.path} alt={photo} />;
        })}
      </WrapperImgProject>
      <WrapperTechnologiesProject>
        {' '}
        {technologies?.map((tech, index) => {
          const img = skillsData.find(el => el.name === tech);
          return (
            <Icon
              key={tech}
              index={index}
              iconLogo={img?.logo}
              iconName={tech}
              iconSize='25px'
            />
          );
        })}
      </WrapperTechnologiesProject>
      <WrapperDescriptionProject>{description}</WrapperDescriptionProject>
      <WrapperLinkProject>
        <LinkProject>
          <a href={link}>Podgląd</a>
        </LinkProject>
        <LinkProject>
          <a href={github}>Kod GitHub</a>
        </LinkProject>
      </WrapperLinkProject>
    </WrapperCardProject>
  );
};
export default CardProject;
