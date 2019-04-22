import React, { useState, Fragment } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  border: 1px solid #cacaca;
  height: 20px;
`;
const SliderElement = styled.div`
  height: 100%;
  min-width: 10px;
  width: 10px;
  background-color: green;
  position: relative;
  left: ${({ sliderVal, containerWidth, max }) =>
    sliderVal && (containerWidth / max) * sliderVal}px;
`;

const Slider = ({ min, max, steps }) => {
  const [containerWidth, setContainerWidth] = useState();
  const [sliderVal, setSliderVal] = useState(0);
  const refCallback = element => {
    if (element) {
      setContainerWidth(element.getBoundingClientRect().width);
    }
  };

  const handleSliderMove = e => {
    setSliderVal(Math.max((max / containerWidth) * e), 0);
  };

  return (
    <Fragment>
      <SliderContainer
        ref={refCallback}
        onDragOver={e => handleSliderMove(e.nativeEvent.clientX)}
      >
        <SliderElement
          draggable="true"
          sliderVal={sliderVal}
          containerWidth={containerWidth}
          max={max}
        />
      </SliderContainer>
      {sliderVal}
    </Fragment>
  );
};

export default Slider;
