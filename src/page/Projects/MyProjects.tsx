import * as S from './StyleMyProjects';
import CardProject from 'components/CardProject/CardProject';
import { DataMyProjects } from 'DataBase/Project';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect, useRef } from 'react';
import 'swiper/css/bundle';
import { Pagination, Navigation, EffectFlip } from 'swiper/modules';
import SwiperCore from 'swiper';
import { v4 as uuidv4 } from 'uuid';
import { TittleSection } from 'components/atoms/TittleSection';

type MyProjectsProps = {
  // logo?: string;
  // swiper: SwiperCore;
};

export const MyProjects: React.FC<MyProjectsProps> = () => {
  const [useNavigation, setUseNavigation] = useState(true);
  const swiperRef = useRef<SwiperCore>(null);
  const [preparedData, setPreparedData] = useState(DataMyProjects);
  const [activeSlide, setActiveSlide] = useState(0);
  const uniqueSlidesCount = DataMyProjects.length;

  // @ts-ignore
  const handleDotClickDot = index => {
    swiperRef.current?.slideToLoop(index);
  };

  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth < 768) {
        setUseNavigation(false);
      } else {
        setUseNavigation(true);
      }
    };
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);

  useEffect(() => {
    const minimalSlidesCount = 6;
    let data = [...DataMyProjects];
    while (data.length < minimalSlidesCount) {
      data = [...data, ...DataMyProjects];
    }
    setPreparedData(data);
  }, []);

  return (
    <S.WrapperProject>
      <TittleSection>Projekty</TittleSection>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        rewind={false}
        loop={true}
        navigation={useNavigation ? true : false}
        modules={[Pagination, Navigation, EffectFlip]}
        spaceBetween={50}
        slidesPerView={1}
        // pagination={{ clickable: true }}
        // onSlideChange={() => console.log('slide change')}
        // @ts-ignore
        onSlideChange={swiper =>
          setActiveSlide(swiper.realIndex % uniqueSlidesCount)
        }
        onInit={
          // @ts-ignore
          swiper => {
            swiper.update();
            swiper.slideTo(2, 0, true);
          }
        }
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 1,
          },
        }}
      >
        {preparedData.map((slide, index) => (
          <SwiperSlide key={`${slide.title}-${index}`} virtualIndex={index}>
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

      <S.CustomPagination>
        {Array.from({ length: uniqueSlidesCount }).map((_, index) => (
          // @ts-ignore
          <S.Dot
            key={index}
            $isActive={index === activeSlide}
            onClick={() => handleDotClickDot(index)}
          ></S.Dot>
        ))}
      </S.CustomPagination>
    </S.WrapperProject>
  );
};
export default MyProjects;
