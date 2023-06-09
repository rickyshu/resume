import * as S from "./Info.style";

// public
import personalImg from "../../../public/assets/images/personalImg/personalImg.jpg";

// constant ContactInfo
import { CONTACTINFO } from "../../constants/index";

// types
import { UserContactInfo } from "../../types/index";
// import { }

// react-component
import ContactCard from "./ContactCard";

function Info() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Profile>
          <S.Heading>Web Developer</S.Heading>
          <S.PersonalImg src={personalImg} />
          <S.PersonalName>이호인</S.PersonalName>
        </S.Profile>
        <S.ContactInfo>
          <S.RightHeading>About Me</S.RightHeading>
          <S.RightUserInfo>
            {CONTACTINFO.PERSONAL_INFO.map(({ id, Icon, AboutMeTitle, AboutMeInfo }: UserContactInfo) => {
              return <ContactCard key={id} Icon={Icon} AboutMeTitle={AboutMeTitle} AboutMeInfo={AboutMeInfo} />;
            })}
          </S.RightUserInfo>
        </S.ContactInfo>
      </S.Wrapper>
    </S.Container>
  );
}

export default Info;
