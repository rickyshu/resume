import * as S from "./Home.style";

// react component
import Info from "../../component/Info/Info";
import Introductions from "../../component/Introduction/Introduction";
import Skills from "../../component/Skills/Skills";
import Archiving from "../../component/Archiving/Archiving";
import Projects from "../../component/Projects/Projects";
import Studies from "../../component/Studies/Studies";
import Footer from "../../layout/footer/Footer";
import Arrow from "../../component/Arrow/Arrow";
import Languages from "../../component/Language/Languages";

function Home() {
  return (
    <S.Container>
      <Info />
      <Introductions />
      <Skills />
      <Archiving />
      <Projects />
      <Studies />
      <Arrow />
      <Languages />
      <Footer />
    </S.Container>
  );
}

export default Home;
