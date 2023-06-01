import * as S from "./Home.style";

import Info from "../../component/Info/Info";
import Introductions from "../../component/Introduction/Introduction";

const Home = () => {
  return (
    <S.Container>
      <Info></Info>
      <Introductions />
    </S.Container>
  );
};

export default Home;
