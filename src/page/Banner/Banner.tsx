import * as S from './StyleBanner';
import Typewriter from 'typewriter-effect';

export const Banner = () => {
  return (
    <S.BannerWrapper>
      <S.WrapperTextBanner>
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
      </S.WrapperTextBanner>
      <S.WrapperLinkContact>
        <S.LinkWrapper>
          <a href='mailto:paulina2651997@gmail.com'>Email</a>
        </S.LinkWrapper>
        <S.LinkWrapper>
          <a href='https://www.linkedin.com/in/paulina-golenia26/'>Linkedin</a>
        </S.LinkWrapper>
        <S.LinkWrapper>
          <a href='https://github.com/Paullina26'>Github</a>
        </S.LinkWrapper>
      </S.WrapperLinkContact>
    </S.BannerWrapper>
  );
};

export default Banner;
