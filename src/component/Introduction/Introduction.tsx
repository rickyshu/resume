import * as S from "./Introduction.style";

import { TranslateBold } from "../../util/TranslateToBold";

function Introduction() {
  return (
    <S.Container>
      <S.HeadingTitle>Introduction</S.HeadingTitle>
      <S.Wrapper>
        <TranslateBold className="introduction">
          **탄탄한** 기본기를 바탕으로 빠른 성장을 목표로 하는 프론트엔드 개발자 이호인입니다. 역동적인 프론트엔드 생태계에서 빠른 적응력을 키우기 위해서는 기본에 대한 충실함이 필수라고 생각합니다. 이러한 저의 가치를 실현하기 위해 프론트엔드의 핵심인 자바스크립트 및 타입스크립트 언어 스터디와 개발
          사고력을 향상하기 위한 알고리즘 스터디에 참여해 왔습니다. 또한, 기본적인 CS 지식을 확장하려고 다양한 공식 문서와 전공 강의를 이용하여 공부를 했습니다. 기존 학습한 스택에 만족하지 않고 새로운 기술을 항상 배우고자 하는 도전적인 정신을 유지하고 있습니다. 최근에는 React의 SEO 제약을 극복한
          Next.js와 함께 다양한 컴포넌트 설계 방법론을 공부하고 있습니다. 프론트엔드 개발자로서 기본 업무뿐 아니라 변화하는 프론트엔드 생태계에서 적극적으로 참여하고 발전을 추구할 것입니다.
        </TranslateBold>
      </S.Wrapper>
    </S.Container>
  );
}

export default Introduction;
