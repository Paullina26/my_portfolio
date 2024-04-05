import * as S from './StyleAboutMe';
// import TypewriterComponent from 'typewriter-effect';
import Typewriter from 'typewriter-effect';

export const AboutMe = () => {
  return (
    <S.AboutMeWrapper>
      <S.WrapperNameAndSkills>
        <S.Name>Paulina Golenia</S.Name>
        <Typewriter
          options={{
            strings: [
              'React',
              'JavaScript',
              'TypeScript',
              'Styled Components',
              'Git',
              'HTML',
              'CSS',
            ],
            // wyjmij do zxmiennej na zewnątrz i przekaż tutaj tablice. W jsx lepiej nie trzymać takiej tablicy
            autoStart: true,
            loop: true,
          }}
        />
      </S.WrapperNameAndSkills>
      {/* <S.Photo>photo</S.Photo> */}
      <S.WrapperDescription>
        <p>
          Jestem zafascynowana światem technologii i jej postępu na przestrzeni lat. Odnajduje się w
          zadaniach, gdzie mogę dokonać analizy, by rozwiązać problem.
          <br />
          {/* nie używaj br, lepiej zmknąć całość w div i później każd paragraf w p */}
          Chętnie działam w obszarach, które sprawiają, że praca może stać się bardziej efektywna.
          Testowanie nowych rozwiązań i czynny udział w ich udoskonalaniu sprawia mi satysfakcje.
          <br />
          <br />W wolnym czasie gram w gry z gatunku strategiczno-ekonomiczne, survival i RPG.
          Najchętniej gram w trybie co-op, pozwoliło mi to dostrzec jak komunikacja i planowanie
          wspólnych działań wpływa na sukces całej grupy. <br />
          Hobbystycznie prowadzę kanał na YouTube.
        </p>
      </S.WrapperDescription>
    </S.AboutMeWrapper>
  );
};

export default AboutMe;
