import * as S from "./Introduction.style";

import { TranslateBold } from "../../util/TranslateToBold";

function Introduction() {
  return (
    <S.Container>
      <S.HeadingTitle>Introduction</S.HeadingTitle>
      <S.Wrapper>
        <TranslateBold className="introduction">
          **탄탄한 기본**을 바탕으로 빠른 성장을 지향하는 프론트엔드 개발자 이호인 입니다. 비록 비전공자 출신이지만 졸업 전 교내 컴퓨터과학 관련 전공을 일부 수강하면서 개발자의 꿈을 키워왔습니다. 학문적인 접근 외에도 교내 공대 계열 개발 동아리에 지원해 다양한 세미나를 참여하면서 개발 관련 지식과
          인사이트를 확정하고자 노력해왔습니다. 이러한 노력을 기반으로 개인이 성장하는 개발자가 아닌 팀이 함께 성장하는 개발자로 성장하고 싶습니다.
        </TranslateBold>
      </S.Wrapper>
    </S.Container>
  );
}

export default Introduction;
