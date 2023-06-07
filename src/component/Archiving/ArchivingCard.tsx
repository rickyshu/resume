import * as S from "./ArchivingCard.style";
import { ArchivingInfo, ArchivingDescriptionLists } from "../../types";

function ArchivingCard({ archLink, logoImg, logoName, description, description_lists }: ArchivingInfo) {
  return (
    <S.Container>
      <S.LogoSection>
        <S.LogoImg src={logoImg} alt={logoName} />
        <S.LogoName>{logoName}</S.LogoName>
      </S.LogoSection>
      <S.StyledLink href={archLink} target="_blank">
        링크
      </S.StyledLink>
      <S.ArchiveDes>{description}</S.ArchiveDes>
      <ul>
        {(description_lists ?? []).map(({ id, content }: ArchivingDescriptionLists) => {
          return <S.ArchiveListContent key={id}>{content}</S.ArchiveListContent>;
        })}
      </ul>
    </S.Container>
  );
}

export default ArchivingCard;
