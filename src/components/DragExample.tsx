import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import StyledMotionBox from "./StyledMotionBox";

const StyledContainer = styled(StyledMotionBox)`
  background: rgba(255, 255, 255, 0.2);
  display: grid;
  align-items: center;
  padding: 0.45rem;
  overflow: hidden;
`;

const StyledItem = styled(motion.div)`
  width: 80px;
  height: 80px;
  background: var(--white);
  border-radius: 15px;
`;

const DragExample = () => {
  const constraints = useRef(null);

  return (
    <StyledContainer ref={constraints}>
      <StyledItem drag dragElastic={1} dragConstraints={constraints} />
    </StyledContainer>
  );
};

export default DragExample;
