import * as S from './StyleSliderIconHorizontalInfinity';
import skillsData from 'DataBase/Skills';
import Icon from 'components/Icon/Icon';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';

type SliderIconHorizontalInfinityProps = {
  items: { name: string; logo: string }[];
  iconSize?: string;
};

export const SliderIconHorizontalInfinity: React.FC<
  SliderIconHorizontalInfinityProps
> = ({ items, iconSize = '50px' }) => {
  return (
    <S.WrapperSliderIconHorizontalInfinity>
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
        {items.map((item, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <Icon
              key={index}
              index={index}
              iconName={item.name}
              iconLogo={item.logo}
              iconNameElement={item.name}
              iconSize={iconSize}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.WrapperSliderIconHorizontalInfinity>
  );
};

export default SliderIconHorizontalInfinity;
