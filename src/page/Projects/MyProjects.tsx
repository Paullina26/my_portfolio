import * as S from './StyleMyProjects';
import CardProject from 'components/CardProject/CardProject';
import { DataMyProjects } from 'DataBase/Project';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import 'swiper/css/bundle';
import { Pagination, Navigation, EffectFlip } from 'swiper/modules';

type MyProjectsProps = {
  // logo?: string;
  // swiper: SwiperCore;
};
// jak nie masz propsów to wywal całe : "React.FC<MyProjectsProps>"
export const MyProjects: React.FC<MyProjectsProps> = () => {
  return (
    <S.WrapperProject>
      <S.Project>Projekty</S.Project>
      <Swiper
        // effect={'flip'}
        grabCursor={true}
        centeredSlides={true}
        rewind={true}
        navigation={true}
        modules={[Pagination, Navigation, EffectFlip]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        breakpoints={{
          1024: {
            slidesPerView: 1,
          },
          1000: {
            slidesPerView: 1,
          },
        }}
      >
        {DataMyProjects.map((slide, index) => (
          <SwiperSlide key={slide.title} virtualIndex={index}>
            <CardProject
              tittleProject={slide.title}
              // projectImg={slide.images}
              // nameImg={slide.title}
              descriptionProject={slide.description}
              technologiesProject={slide.technologies}
              link={slide.link}
              github={slide.github}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.WrapperProject>
  );
};
export default MyProjects;
