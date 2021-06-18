import React from "react";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";

const StyledContainer = styled(motion.div)`
  display: flex;
  justify-content: space-around;
`;

const StyledDot = styled(motion.div)`
  background-color: var(--white);
  border-radius: 100%;
  height: 20px;
  margin: 5px;
  width: 20px;
`;

const ThreeDotsLoadingExample = () => {
  const container: Variants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const dot: Variants = {
    start: { y: 0 },
    end: {
      y: 10,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <StyledContainer variants={container} initial="start" animate="end">
      {[0, 1, 2].map((item) => (
        <StyledDot key={item} variants={dot} />
      ))}
    </StyledContainer>
  );
};

export default ThreeDotsLoadingExample;
