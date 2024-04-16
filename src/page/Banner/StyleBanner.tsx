import styled from 'styled-components';
import { glass_effect } from 'style/mixins';

export const BannerWrapper = styled.div`
  margin-top: 20px;
  padding: 20px;
  @media (max-width: 414px) {
    min-height: 250px;
  }
`;

export const Photo = styled.div`
  ${glass_effect};
  margin: 20px auto;
  padding: 20px;
  width: 200px;
  height: 200px;
`;

export const WrapperNameAndSkills = styled.div`
  font-size: 2.5rem;
`;

export const Name = styled.h1`
  font-family: 'Petit Formal Script';
  font-weight: 100;
  font-size: 6rem;
`;
