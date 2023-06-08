import * as S from "./ImageSlider.style";

import { useState } from "react";

import { ProjectImg } from "../../types/index";

interface ImageSliderProps {
  slides: Array<ProjectImg>;
}

function ImageSlider({ slides }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <S.Container>
      <S.Slider>
        <S.SlideImg src={slides[currentIndex].url} />
        <S.ArrowLeft onClick={goToPrevious} />
        <S.ArrowRight onClick={goToNext} />
        <S.Index>{`${currentIndex + 1}/${slides.length}`}</S.Index>
      </S.Slider>
    </S.Container>
  );
}

export default ImageSlider;
