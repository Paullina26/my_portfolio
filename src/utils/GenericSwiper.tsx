import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Pagination, Navigation, EffectFlip } from 'swiper/modules';
import 'swiper/css/bundle';
import styled from 'styled-components';

type SwiperComponentProps = {
  data: Array<{
    title: string;
    description: string;
    technologies?: string[];
    link?: string;
    github?: string;
  }>;
  cardComponent: React.ComponentType<{
    title: string;
    description: string;
    technologies?: string[];
    link?: string;
    github?: string;
  }>;
};

const CustomPagination = styled.div`
  height: 50px;
  text-align: center;
  margin-top: 10px;
  .dot {
    background-color: #808080;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    display: inline-block;
    margin: 20px 5px;
    &.active {
      background-color: #ffffff;
    }
  }
`;

export const WrapperSwiper = styled.div`
  width: 95vw;
  text-align: center;
  margin: auto;
  .swiper-button-prev,
  .swiper-button-next {
    color: #dddddd;
    --swiper-navigation-size: 70px;
    @media (max-width: 768px) {
      display: none;
    }
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

const GenericSwiper: React.FC<SwiperComponentProps> = ({
  data,
  cardComponent: CardComponent,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiperData, setSwiperData] = useState<Array<(typeof data)[0]>>([]);
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    if (data.length < 6) {
      const duplicatedData = [...data, ...data];
      setSwiperData(duplicatedData);
    } else {
      setSwiperData(data);
    }
  }, [data]);

  return (
    <WrapperSwiper>
      <Swiper
        onSwiper={(instance: SwiperCore) => (swiperRef.current = instance)}
        onSlideChange={(swiper: SwiperCore) => setActiveSlide(swiper.realIndex)}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation, EffectFlip]}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          1024: { slidesPerView: 3 },
          900: { slidesPerView: 3 },
          600: { slidesPerView: 1, navigation: false },
        }}
      >
        {swiperData.map((item, index) => (
          <SwiperSlide key={index}>
            <CardComponent {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <CustomPagination>
        {data.map((_, index) => (
          <div
            key={index}
            className={`dot ${
              index === activeSlide % data.length ? 'active' : ''
            }`}
            onClick={() => swiperRef.current?.slideToLoop(index)}
          />
        ))}
      </CustomPagination>
    </WrapperSwiper>
  );
};

export default GenericSwiper;
