import { useState } from "react";
import * as S from "./Arrow.style";

function Arrow() {
  const [showArrow, setShowArrow] = useState<boolean>(false);

  const checkScrollDown = () => {
    if (!showArrow && window.pageYOffset > 400) {
      setShowArrow(true);
    } else if (showArrow && window.pageYOffset <= 400) {
      setShowArrow(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollBottom = () => {
    const el = document.documentElement;
    el.scrollTo({ top: el.scrollHeight - el.clientHeight, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollDown);

  return (
    <S.Container showArrow={showArrow}>
      <S.ArrowUpWrapper onClick={scrollTop}>
        <S.ArrowUpIcon />
      </S.ArrowUpWrapper>
      <S.ArrowDownWrapper onClick={scrollBottom}>
        <S.ArrowDownIcon />
      </S.ArrowDownWrapper>
    </S.Container>
  );
}

export default Arrow;
