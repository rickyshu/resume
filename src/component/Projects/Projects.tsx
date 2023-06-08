import * as S from "./Projects.style";

import { ProjectInfo } from "../../types";
import { useFetchData } from "../../hooks/useFetchData";
import ProjectCard from "./ProjectCard";

function Projects() {
  const { data: projectInfo } = useFetchData<Array<ProjectInfo>>(`${import.meta.env.VITE_API_URL}/project`);
  console.log(projectInfo);
  return (
    <S.Container>
      <S.Wrapper>
        <S.HeadingTitle>Projects</S.HeadingTitle>
        <S.CardWrapper>
          {(projectInfo ?? []).map(({ id, name, period, summary, description, teckStack, repositoryLink, projectImage, projectLink, projectVideo }: ProjectInfo) => {
            return <ProjectCard key={id} name={name} period={period} summary={summary} description={description} teckStack={teckStack} repositoryLink={repositoryLink} projectImage={projectImage} projectLink={projectLink} projectVideo={projectVideo} />;
          })}
        </S.CardWrapper>
      </S.Wrapper>
    </S.Container>
  );
}

export default Projects;
