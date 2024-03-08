import styled from 'styled-components';
import { glass_effect } from 'style/mixins';

export const WrapperProject = styled.div`
  padding: 10px;
  display: inline-block;
`;

export const Project = styled.h2`
  padding: 10px;
  font-size: 5rem;
`;

export const CardProject = styled.div`
  ${glass_effect};
  padding: 10px;
  display: inline-block;
  width: 400px;
  height: 500px;
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
