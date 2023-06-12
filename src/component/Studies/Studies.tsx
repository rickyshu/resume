import * as S from "./Studies.style";

// custom hook
import { useFetchData } from "../../hooks/useFetchData";

// types
import { StudiesInfo } from "../../types";

import React from "react";

function Studies() {
  const { data: StudiesData } = useFetchData<Array<StudiesInfo>>(`${import.meta.env.VITE_API_URL}/studies`);
  return (
    <S.Container>
      <S.HeadingTitle>Studies</S.HeadingTitle>
      <S.Wrapper>
        <S.ContentSection>
          <S.List>활동명</S.List>
          <S.List>기간</S.List>
          <S.List>링크</S.List>
          {(StudiesData ?? []).map(({ id, period, studyLink, studyName }: StudiesInfo) => {
            return (
              <React.Fragment key={id}>
                <S.List>{studyName}</S.List>
                <S.List>{period}</S.List>
                <S.Link href={studyLink} target="_blank" rel="noreferrer">
                  링크
                </S.Link>
              </React.Fragment>
            );
          })}
        </S.ContentSection>
      </S.Wrapper>
    </S.Container>
  );
}

export default Studies;
