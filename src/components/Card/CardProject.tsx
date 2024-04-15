import styled from 'styled-components';
import { glass_effect, glass_effect_button } from 'style/mixins';
import Icon from 'components/Icon/Icon';
import skillsData from 'DataBase/Skills';
import { AnimatedShiningBar } from 'components/atoms/AnimatedShiningBar';
import { LinkProject } from 'components/atoms/StyledButtons';

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

type CardProjectProps = {
  projectImg?: string;
  nameImg?: string;
  title: string;
  description: string;
  technologies?: string[];
  link?: string;
  github?: string;
};

export const CardProject: React.FC<CardProjectProps> = ({
  projectImg,
  nameImg,
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
      {/* <WrapperImgProject>
        <img src={projectImg} alt={nameImg} />
      </WrapperImgProject> */}
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
