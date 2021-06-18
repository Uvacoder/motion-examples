import React from "react";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";

const StyledLetter = styled(motion.span)`
  color: var(--white);
  display: inline-block;
  font-family: sans-serif;
  font-size: 72px;
  font-weight: bold;
`;

const SlideInExample = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const letter: Variants = {
    hidden: { x: 40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      {[..."Hello"].map((l, i) => (
        <StyledLetter key={l + i} variants={letter}>
          {l}
        </StyledLetter>
      ))}
    </motion.div>
  );
};

export default SlideInExample;
