import * as S from './StyleMySkills';
import skillsData from 'DataBase/Skills';
import Skill from 'components/Skill/Skill';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';

export const MySkills = () => {
  return (
    <S.WrapperSkills>
      <Swiper
        speed={3600}
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 1, disableOnInteraction: false }}
        breakpoints={{
          1024: {
            slidesPerView: 5,
          },
          600: {
            slidesPerView: 3,
          },
        }}
      >
        {skillsData.map((skill, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <Skill
              key={index}
              index={index}
              skillName={skill.name}
              skillLogo={skill.logo}
              skillNameElement={skill.name}
              skillSize='50px'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.WrapperSkills>
  );
};

export default MySkills;
