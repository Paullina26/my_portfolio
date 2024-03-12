import * as S from './StyleMyProjects';
import CardProject from 'components/CardProject/CardProject';
import { DataMyProjects } from 'DataBase/Project';
import { Swiper, SwiperSlide } from 'swiper/react';

type MyProjectsProps = {
  // logo?: string;
};

export const MyProjects: React.FC<MyProjectsProps> = () => {
  return (
    <div>
      <S.Project>Projekty</S.Project>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        // onSwiper={swiper => console.log(swiper)}
      >
        {DataMyProjects.map(el => (
          <SwiperSlide>
            <CardProject
              tittleProject={el.tittle}
              projectImg={el.images}
              nameImg={el.tittle}
              descriptionProject={el.description}
              technologiesProject={el.technologies}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default MyProjects;
