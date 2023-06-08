import * as S from "./Archiving.style";
import { ArchivingInfo } from "../../types";
import { useFetchData } from "../../hooks/useFetchData";
import ArchivingCard from "./ArchivingCard";

function Archiving() {
  const { data: ArchivingInfo } = useFetchData<Array<ArchivingInfo>>(`${import.meta.env.VITE_API_URL}/archiving`);

  return (
    <S.Container>
      <S.HeadingTitle>Archiving</S.HeadingTitle>
      <S.Wrapper>
        <S.CardSection>
          {(ArchivingInfo ?? []).map(({ id, archLink, logoImg, logoName, description, description_lists }: ArchivingInfo) => {
            return <ArchivingCard key={id} archLink={archLink} logoImg={logoImg} logoName={logoName} description={description} description_lists={description_lists} />;
          })}
        </S.CardSection>
      </S.Wrapper>
    </S.Container>
  );
}

export default Archiving;
