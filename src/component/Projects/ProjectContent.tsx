import * as S from "./ProjectCotent.style";

// util
import { TranslateBold } from "../../util/TranslateToBold";

interface ProjectContentProps {
  description: string;
  summary: string;
}

function ProjectContent({ summary, description }: ProjectContentProps) {
  // const testSummary = "실물(Silmul)은 개발자들을 위한 소통하는 **포트폴리오 공유 플랫폼**입니다.";
  // const tesDescription =
  //   "처음으로 **react query**를 적용해 프로젝트를 진행하면서 캐싱 및 클라이언트 state와 서버 state의 분리의 중요성을 학습할 수 있었습니다. 기존의 react component 내에서 styled-component를 사용하는 방식이 아닌 style 관련 파일을 따로 분리하는 방식으로 react의 module css와 흡사한 방식으로 진행해보았습니다. 마지막으로 프로젝트 팀장을 맡으면서 소통의 스킬과 협업의 방식을 배우고 전체적인 프로젝트의 프로세스를 파악하는 것의 중요성을 일깨워준 중요한 경험을 하게 됐습니다";
  return (
    <S.Container>
      <S.Summary>
        <S.Heading>요약</S.Heading>
        <TranslateBold>{summary}</TranslateBold>
      </S.Summary>
      <S.Description>
        <S.Heading>회고</S.Heading>
        <TranslateBold>{description}</TranslateBold>
      </S.Description>
    </S.Container>
  );
}

export default ProjectContent;
