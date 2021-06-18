import React from "react";

import "./App.css";
import StyledMain from "./components/StyledMain";
import StyledCard from "./components/StyledCard";
import SlideInExample from "./components/SlideInExample";
import BasicSpringExample from "./components/ BasicSpringExample";
import VariantsExample from "./components/VariantsExample";
import GesturesExample from "./components/GesturesExample";
import DragExample from "./components/DragExample";
import KeyframesExample from "./components/KeyframesExample";
import MenuVariantsExample from "./components/MenuVariantsExample";
import MotionValuesExample from "./components/MotionValuesExample";
import MarqueeExample from "./components/MarqueeExample";
import ThreeDotsLoadingExample from "./components/ThreeDotsLoadingExample";

function App() {
  return (
    <StyledMain>
      <StyledCard>
        <SlideInExample />
      </StyledCard>

      <StyledCard>
        <BasicSpringExample />
      </StyledCard>

      <StyledCard>
        <VariantsExample />
      </StyledCard>

      <StyledCard>
        <GesturesExample />
      </StyledCard>

      <StyledCard>
        <DragExample />
      </StyledCard>

      <StyledCard>
        <KeyframesExample />
      </StyledCard>

      <StyledCard disableFlex>
        <MenuVariantsExample />
      </StyledCard>

      <StyledCard>
        <MotionValuesExample />
      </StyledCard>

      <StyledCard>
        <MarqueeExample />
      </StyledCard>

      <StyledCard>
        <ThreeDotsLoadingExample />
      </StyledCard>
    </StyledMain>
  );
}

export default App;
