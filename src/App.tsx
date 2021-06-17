import React from "react";

import "./App.css";
import StyledMain from "./components/StyledMain";
import StyledCard from "./components/StyledCard";
import BasicSpringExample from "./components/ BasicSpringExample";
import VariantsExample from "./components/VariantsExample";
import GesturesExample from "./components/GesturesExample";
import DragExample from "./components/DragExample";
import KeyframesExample from "./components/KeyframesExample";
import MenuVariantsExample from "./components/MenuVariantsExample";

function App() {
  return (
    <StyledMain>
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
    </StyledMain>
  );
}

export default App;
