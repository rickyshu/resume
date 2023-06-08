import * as S from "./Languages.style";

function Languages() {
  return (
    <S.Container>
      <S.HeadingTitle>Languages</S.HeadingTitle>
      <S.Wrapper>
        <S.LanguagesInfo>
          <S.Language>영어: 중상 (공식 문서 해석 가능)</S.Language>
          <S.Language>중국어: 중상 (일상적인 대화 가능)</S.Language>
        </S.LanguagesInfo>
      </S.Wrapper>
    </S.Container>
  );
}

export default Languages;
