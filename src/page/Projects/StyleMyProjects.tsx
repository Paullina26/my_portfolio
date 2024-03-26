import styled from 'styled-components';
import { glass_effect } from 'style/mixins';

export const WrapperProject = styled.div`
  padding: 10px;
  /* max-width: 100vw; */

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
    /* background-color: red; */
    opacity: 1;
  }
`;

export const Project = styled.h2`
  padding: 10px;
  font-size: 5rem;
  margin-bottom: 20px;
`;

// swiper-pagination-bullet swiper-pagination-bullet-active
