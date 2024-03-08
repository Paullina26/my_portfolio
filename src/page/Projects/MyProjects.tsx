import skillsData from 'DataBase/Skills';
import * as S from './StyleMyProjects';
import Skill from 'components/Skill/Skill';

const DataMyProjects = [
  {
    tittle: 'Odłoszenia dla Rolników',
    images: ['HTML', 'CSS', 'JavaScript'],
    technologies: 'React Styled Components',
    link: '',
    description: '',
    seeMore: '',
  },
];

export const MyProjects = () => {
  return (
    <div>
      <S.Project>Projekty</S.Project>
      <S.CardProject>
        <S.TittleProject>tytuł</S.TittleProject>
        <S.WrapperImgProject>zdjęcie</S.WrapperImgProject>
        <S.WrapperTechnologiesProject>technologie</S.WrapperTechnologiesProject>
        <div>link</div>
        {['HTML', 'CSS', 'JavaScript'].map((tech, index) => {
          const img = skillsData.find(el => el.name === tech);

          return <Skill index={index} skillLogo={tech} />;
        })}
        <S.WrapperDescriptionProject>opis</S.WrapperDescriptionProject>
        <div>zobacz więcej</div>
      </S.CardProject>
    </div>
  );
};
export default MyProjects;


 {/* <img src={img?.logo} alt={tech} /> */}