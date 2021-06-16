import React from "react";

import "./App.css";
import StyledMain from "./components/StyledMain";
import StyledCard from "./components/StyledCard";
import BasicSpringExample from "./components/ BasicSpringExample";
import VariantsExample from "./components/VariantsExample";

function App() {
  return (
    <StyledMain>
      <StyledCard>
        <BasicSpringExample />
      </StyledCard>
      <StyledCard>
        <VariantsExample />
      </StyledCard>
    </StyledMain>
  );
}

export default App;
