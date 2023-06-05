import * as S from "./Skills.style";
import { useFetchData } from "../../hooks/useFetchData";
import { SkillsInfo } from "../../types";
import Description from "./Description";

function Skills() {
  const { data: skillData } = useFetchData<Array<SkillsInfo>>("../../../public/data/Contact/Skills.json");

  return (
    <S.Container>
      <S.Wrapper>
        <S.HeadingTitle>Skills</S.HeadingTitle>
        {(skillData ?? []).map(({ id, skillImg, skillName, description }: SkillsInfo) => {
          return <Description key={id} skillImg={skillImg} skillName={skillName} description={description} />;
        })}
      </S.Wrapper>
    </S.Container>
  );
}

export default Skills;
