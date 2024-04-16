import * as S from './StyleBanner';
import Typewriter from 'typewriter-effect';

export const Banner = () => {
  return (
    <S.BannerWrapper>
      <S.WrapperNameAndSkills>
        <S.Name>Paulina Golenia</S.Name>
        <Typewriter
          options={{
            strings: [
              'Aspirująca Programistka Front-End',
              'Entuzjastka Składania PC',
              'YouTuber',
              'Zainterseowana AI',
              'Kochająca Gry Komputerowe',
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </S.WrapperNameAndSkills>
    </S.BannerWrapper>
  );
};

export default Banner;
