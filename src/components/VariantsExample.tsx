import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import StyledMotionBox from "./StyledMotionBox";

const StyledContainer = styled(StyledMotionBox)`
  background: rgba(255, 255, 255, 0.2);
  display: grid;
  gap: 0.25rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 0.45rem;
`;

const StyledItem = styled(motion.div)`
  background: var(--white);
  border-radius: 100%;
`;

const VariantsExample = () => {
  return (
    <StyledContainer
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {[0, 1, 2, 3].map((index) => {
        return (
          <StyledItem
            key={index}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          />
        );
      })}
    </StyledContainer>
  );
};

export default VariantsExample;
