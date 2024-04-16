import styled from 'styled-components';

export const WrapperIcon = styled.div`
  padding: 5px;
  display: inline-block;
  text-align: center;
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
`;

type IconProps = {
  index: number | string;
  iconName: string;
  iconLogo: string;
  iconNameElement?: string;
  iconSize?: string;
};

export const Icon: React.FC<IconProps> = ({
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

export default Icon;
