import * as S from "./ContactCard.style";

import { IconType } from "react-icons/lib";

interface ContactCardProps {
  Icon: IconType;
  AboutMeTitle: string;
  AboutMeInfo: string;
}

function ContactCard({ Icon, AboutMeTitle, AboutMeInfo }: ContactCardProps) {
  return (
    <S.Container>
      <S.IconSection>
        <Icon />
      </S.IconSection>
      <S.InfoSection>
        <S.Info className="title">{AboutMeTitle}</S.Info>
        <S.Info>{AboutMeInfo}</S.Info>
      </S.InfoSection>
    </S.Container>
  );
}

export default ContactCard;
