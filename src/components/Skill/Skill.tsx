import styled from 'styled-components';
import { glass_effect } from 'style/mixins';
import skillsData from 'DataBase/Skills';

export const WrapperIcon = styled.div`
  padding: 10px;
  display: inline-block;
  text-align: center;
  /* justify-content: center; */
  /* margin: auto; */
`;

export const WrapperImgIcon = styled.div<{ $iconSizeStyle: string }>`
  width: 100%;
  img {
    width: ${props => props.$iconSizeStyle};
    height: ${props => props.$iconSizeStyle};
  }
`;
export const WrapperNameIcon = styled.div`
  /* padding: 10px; */
  /* background-color: #8f2828; */
`;

type SkillProps = {
  index: number | string;
  iconName: string;
  iconLogo: string;
  iconNameElement?: string;
  iconSize?: string;
};

export const Skill: React.FC<SkillProps> = ({
  index,
  iconName,
  iconLogo,
  iconNameElement,
  iconSize = '50px',
}) => {
  return (
    <WrapperIcon key={index}>
      <WrapperImgIcon $iconSizeStyle={iconSize}>
        <img src={iconLogo} alt={iconName} />
      </WrapperImgIcon>
      <WrapperNameIcon>{iconNameElement}</WrapperNameIcon>
    </WrapperIcon>
  );
};

export default Skill;
