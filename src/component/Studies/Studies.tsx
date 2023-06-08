import * as S from "./Studies.style";

// custom hook
import { useFetchData } from "../../hooks/useFetchData";

// types
import { StudiesInfo } from "../../types";

// react component
import StudiesCard from "./StudiesCard";

function Studies() {
  const { data: StudiesData } = useFetchData<Array<StudiesInfo>>(`${import.meta.env.VITE_API_URL}/studies`);
  return (
    <S.Container>
      <S.Wrapper>
        <S.HeadingTitle>Studies</S.HeadingTitle>
        <S.ContentSection>
          <StudiesCard studyName={"스터디 이름"} period={"참여기간"} studyLink={"/"} />
          {(StudiesData ?? []).map(({ id, period, studyLink, studyName }: StudiesInfo) => {
            return <StudiesCard key={id} period={period} studyLink={studyLink} studyName={studyName} />;
          })}
        </S.ContentSection>
      </S.Wrapper>
    </S.Container>
  );
}

export default Studies;
