import * as S from "./StudiesCard.style";

// types
import { StudiesInfo } from "../../types";

function StudiesCard({ period, studyLink, studyName }: StudiesInfo) {
  return (
    <S.Container>
      <S.StudyName>{studyName}</S.StudyName>
      <S.Period>{period}</S.Period>
      <S.StudyLink href={studyLink} target="_blank">
        참고링크
      </S.StudyLink>
    </S.Container>
  );
}

export default StudiesCard;
