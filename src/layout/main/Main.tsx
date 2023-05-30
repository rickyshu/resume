import * as S from "./Main.style";

interface GeneralLayoutProps {
  children: React.ReactNode;
}
const Main: React.FC<GeneralLayoutProps> = ({ children }) => {
  return <S.Main>{children}</S.Main>;
};

export default Main;
