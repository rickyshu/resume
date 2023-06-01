import * as S from "./Info.style";
import personalImg from "../../assets/personalImg.jpg";

function Info() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Profile>
          <S.Heading>Web Developer</S.Heading>
          <S.PersonalImg src={personalImg} />
          <S.PersonalName>이호인</S.PersonalName>
        </S.Profile>
        <S.ContactInfo>contact</S.ContactInfo>
      </S.Wrapper>
    </S.Container>
  );
}

export default Info;
