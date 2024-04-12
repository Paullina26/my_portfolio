import * as S from './StyleBanner';
// import TypewriterComponent from 'typewriter-effect';
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
      {/* <S.Photo>photo</S.Photo> */}
      {/* <S.WrapperDescription>
        <p>
          Jestem zafascynowana światem technologii i jej postępu na przestrzeni
          lat. Odnajduje się w zadaniach, gdzie mogę dokonać analizy, by
          rozwiązać problem.
          <br />
          Chętnie działam w obszarach, które sprawiają, że praca może stać się
          bardziej efektywna. Testowanie nowych rozwiązań i czynny udział w ich
          udoskonalaniu sprawia mi satysfakcje.
          <br />
          <br />W wolnym czasie gram w gry z gatunku strategiczno-ekonomiczne,
          survival i RPG. Najchętniej gram w trybie co-op, pozwoliło mi to
          dostrzec jak komunikacja i planowanie wspólnych działań wpływa na
          sukces całej grupy. <br />
          Hobbystycznie prowadzę kanał na YouTube.
        </p>
      </S.WrapperDescription> */}
    </S.BannerWrapper>
  );
};

export default Banner;
