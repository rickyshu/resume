import * as S from "./Description.style";
import { TranslateBold } from "../../util/TranslateToBold";

interface DescriptionProps {
  skillImg: string;
  skillName: string;
  description: string;
}

function Description({ skillImg, skillName, description }: DescriptionProps) {
  return (
    <S.Container>
      <S.SkillImg src={skillImg} alt={skillName} />
      <S.SkillName>{skillName}</S.SkillName>
      <TranslateBold>{description}</TranslateBold>
    </S.Container>
  );
}

export default Description;
