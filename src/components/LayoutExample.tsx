import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// switch
const StyledSwitch = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  height: 60px;
  justify-content: flex-start;
  padding: 15px;
  width: 140px;

  &[data-isOn="true"] {
    justify-content: flex-end;
  }
`;

const StyledHandle = styled(motion.div)`
  background-color: var(--white);
  border-radius: 100%;
  height: 70px;
  width: 70px;
`;

const LayoutExample = () => {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn(!isOn);

  return (
    <StyledSwitch onClick={toggle} data-isOn={isOn}>
      <StyledHandle
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      />
    </StyledSwitch>
  );
};

export default LayoutExample;
