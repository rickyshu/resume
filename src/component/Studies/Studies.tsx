import * as S from "./Studies.style";

// custom hook
import { useFetchData } from "../../hooks/useFetchData";

// types
import { StudiesInfo } from "../../types";

// // react component
// import StudiesCard from "./StudiesCard";

function Studies() {
  const { data: StudiesData } = useFetchData<Array<StudiesInfo>>(`${import.meta.env.VITE_API_URL}/studies`);
  return (
    <S.Container>
      <S.HeadingTitle>Studies</S.HeadingTitle>
      <S.Wrapper>
        <S.ContentSection>
          <S.List>이름</S.List>
          <S.List>기간</S.List>
          <S.List>링크</S.List>
          {(StudiesData ?? []).map(({ period, studyLink, studyName }: StudiesInfo) => {
            return (
              <>
                <S.List>{studyName}</S.List>
                <S.List>{period}</S.List>
                <S.Link href={studyLink} target="_blank" rel="noreferrer">
                  링크
                </S.Link>
              </>
            );
          })}
        </S.ContentSection>
      </S.Wrapper>
    </S.Container>
  );
}

export default Studies;
