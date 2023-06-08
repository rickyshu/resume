import * as S from "./ProjectCard.style";

// type
import { ProjectInfo } from "../../types";

// react component
import ImageSlider from "./ImageSlider";
import ProjectContent from "./ProjectContent";

function ProjectCard({ name, period, summary, description, teckStack, repositoryLink, projectImage, projectLink, projectVideo }: ProjectInfo) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ProjectName>{name}</S.ProjectName>
        <S.ProjectPeriod>{period}</S.ProjectPeriod>
        <S.LinkSection>
          <S.LinksFirst>
            <S.Links href={repositoryLink} target="_blank">
              <S.GithubIcon />
              <S.LinkTitle>깃헙 링크</S.LinkTitle>
            </S.Links>
            {projectVideo && (
              <S.Links href={projectVideo} target="_blank">
                <S.YoutubeIcon />
                <S.LinkTitle>기술 영상</S.LinkTitle>
              </S.Links>
            )}
          </S.LinksFirst>
          <S.Links href={projectLink} target="_blank">
            <S.FileIcon />
            <S.LinkTitle>배포 링크</S.LinkTitle>
          </S.Links>
        </S.LinkSection>
        <S.ProejctInfoWrapper>
          <ImageSlider slides={projectImage} />
          <ProjectContent summary={summary} description={description} />
        </S.ProejctInfoWrapper>
        <S.TechLists>
          {(teckStack ?? []).map((stack, index) => {
            return <S.TechStack key={index}>{stack}</S.TechStack>;
          })}
        </S.TechLists>
      </S.Wrapper>
    </S.Container>
  );
}

export default ProjectCard;
