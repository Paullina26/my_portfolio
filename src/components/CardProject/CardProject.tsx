import styled from 'styled-components';
import { glass_effect, glass_effect_button } from 'style/mixins';
import Icon from 'components/Icon/Icon';
import skillsData from 'DataBase/Skills';
import { AnimatedShiningBar } from 'components/atoms/AnimatedShiningBar';

export const WrapperCardProject = styled.div`
  ${glass_effect};
  padding: 20px;
  display: inline-block;
  width: 310px;
  height: 600px;
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
export const StyledSkill = styled(Icon)`
  width: 20px;
  height: 20px;
`;
export const WrapperLinkProject = styled.div`
  margin: 20px auto;
`;
export const LinkToProject = styled.div`
  ${glass_effect_button};
  border-radius: 15px;
  margin: 10px auto;
  width: 200px;
  position: relative;
  overflow: hidden;

  a {
    display: block;
    padding: 10px;
    font-family: 'Jura', sans-serif;
    font-size: 2rem;
    color: white;
    text-decoration: none;
    z-index: 20;
  }

  :before {
    background: #fff;
    content: '';
    height: 155px;
    left: -75px;
    opacity: 0.2;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: -10;
  }

  :hover {
    text-decoration: none;
    &:before {
      left: 110%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
`;

type CardProjectProps = {
  projectImg?: string;
  nameImg?: string;
  tittleProject: string;
  descriptionProject: string;
  technologiesProject: string[];
  link: string;
  github: string;
};

export const CardProject: React.FC<CardProjectProps> = ({
  projectImg,
  nameImg,
  tittleProject,
  descriptionProject,
  technologiesProject,
  link,
  github,
}) => {
  return (
    <WrapperCardProject>
      <TittleProject>{tittleProject}</TittleProject>
      <AnimatedShiningBar />
      {/* <WrapperImgProject>
        <img src={projectImg} alt={nameImg} />
      </WrapperImgProject> */}
      <WrapperTechnologiesProject>
        {' '}
        {technologiesProject.map((tech, index) => {
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
      <WrapperDescriptionProject>
        {descriptionProject}
      </WrapperDescriptionProject>
      <WrapperLinkProject>
        <LinkToProject>
          <a href={link}>Podgląd</a>
        </LinkToProject>
        <LinkToProject>
          <a href={github}>Kod GitHub</a>
        </LinkToProject>
      </WrapperLinkProject>
    </WrapperCardProject>
  );
};
export default CardProject;
