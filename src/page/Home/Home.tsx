import * as S from "./Home.style";

import Info from "../../component/Info/Info";
import Introductions from "../../component/Introduction/Introduction";
import Skills from "../../component/Skills/Skills";
import Blogs from "../../component/Blogs/Blogs";
import Projects from "../../component/Projects/Projects";
import Studies from "../../component/Studies/Studies";
import Footer from "../../layout/footer/Footer";

function Home() {
  return (
    <S.Container>
      <Info />
      <Introductions />
      <Skills />
      <Blogs />
      <Projects />
      <Studies />
      <Footer />
    </S.Container>
  );
}

export default Home;
