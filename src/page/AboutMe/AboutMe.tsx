import styled from 'styled-components';
import { glass_effect_box } from 'style/mixins';
import { TittleSection } from 'components/atoms/TittleSection';
import { AnimatedShiningBar } from 'components/atoms/AnimatedShiningBar';

export const CardHobby = styled.div`
  ${glass_effect_box};
  margin-left: 20px;
  margin: 30px;
  max-width: 500px;
  padding: 10px;
`;

export const TittleHobby = styled.p`
  padding: 10px 0 0 0;
  font-size: 2.5rem;
`;

export const AboutMe = () => {
  return (
    <div>
      <TittleSection>O mnie</TittleSection>
      <CardHobby>
        <TittleHobby>Budowa komputerów</TittleHobby>
        <AnimatedShiningBar />
        <p>
          Pasja do elektroniki narodziła się z chęci oszczędności, gdy chciałam
          złożyć swój pierwszy komputer wiele lat temu. Wszystkiego nauczyłam
          się z darmowych poradników dostępnych w Internecie.
          <br /> Mimo że nie jestem na bieżąco z każdą nowinką, jestem w stanie
          szybko się odnaleźć w nowych technologiach i dostosować sprzęt do
          obecnych standardów.
          <br />
          Miałam okazję kilka razy budować komputer na zamówienie, pomóc przy
          wyborze odpowiedniego sprzętu w wskazanym budżecie i wykonać drobny
          serwis. <br />
          Nauczyło mnie to, jak rozumieć potrzeby klienta i w prosty sposób
          wyjaśnić, dlaczego dana opcja jest lepsza od drugiej. Dodatkowo
          zobaczyłam, że to, co dla mnie jest oczywiste, dla innych jest magią,
          i że przeciętny użytkownik używa komputera inaczej niż ja.
          <br />
          Rozumienie, jak działa komputer i jakie są zależności między
          komponentami, sprawiło, że wejście do świata programowania było dla
          mnie naturalne. Widziałam, że oprogramowanie to całość, a nie
          pojedyncze funkcje – całość, która powinna być możliwa do łatwego
          skalowania na przyszłość. Ważne jest rozumienie użytkownika
          docelowego, który zazwyczaj jest mniej zaznajomiony z technologią, i
          projektowanie rozwiązań w taki sposób, aby wszystko było jak
          najbardziej intuicyjne.
        </p>
      </CardHobby>
    </div>
  );
};
export default AboutMe;
