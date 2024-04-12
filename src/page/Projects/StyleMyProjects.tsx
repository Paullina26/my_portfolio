import styled from 'styled-components';
import { glass_effect } from 'style/mixins';

interface DotProps {
  $isActive: boolean;
}

export const WrapperProject = styled.div`
  padding: 10px;
  .swiper-button-prev,
  .swiper-button-next {
    color: #dddddd;
    --swiper-navigation-size: 70px;
  }
  .swiper-scrollbar {
    opacity: 0;
  }
  .swiper-pagination-bullet-active {
    --swiper-pagination-color: #dddddd;
  }
  .swiper-pagination-bullet {
    --swiper-pagination-color: #dddddd;
    --swiper-pagination-bullet-inactive-color: #ffffff;
    --swiper-pagination-bullet-inactive-opacity: 0.3;
  }

  .swiper-slide-shadow-right,
  .swiper-slide-shadow-coverflow {
    opacity: 1;
  }

  .swiper-slide {
    transform: scale(0.65);
    opacity: 0.6;
  }

  .swiper-slide-active {
    transform: scale(1);
    opacity: 1;
  }
`;

export const CustomPagination = styled.div`
  width: 100vw;
  height: 50px;
  text-align: center;
  margin-top: 10px;
`;

export const Dot = styled.div<DotProps>`
  background-color: ${({ $isActive }) => ($isActive ? '#ffffff' : '#808080')};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  /* cursor: pointer; */
  display: inline-block;
  margin: 20px 5px;
`;

// swiper-pagination-bullet swiper-pagination-bullet-active
