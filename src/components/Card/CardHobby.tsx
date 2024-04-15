import styled from 'styled-components';
import { glass_effect_box } from 'style/mixins';
import { AnimatedShiningBar } from 'components/atoms/AnimatedShiningBar';

export const HobbyCard = styled.div`
  ${glass_effect_box};
  padding: 20px;
  display: inline-block;
  width: 310px;
  height: 600px;
`;

export const TittleHobby = styled.p`
  padding: 10px 0 0 0;
  font-size: 2.5rem;
`;

export const DescriptionHobby = styled.p`
  padding: 10px 0 0 0;
`;

interface HobbyCardProps {
  title: string;
  description: string;
}

const CardHobby: React.FC<HobbyCardProps> = ({ title, description }) => (
  <HobbyCard>
    <TittleHobby>{title}</TittleHobby>
    <AnimatedShiningBar />
    <DescriptionHobby>{description}</DescriptionHobby>
  </HobbyCard>
);

export default CardHobby;
