import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { linear } from "popmotion";

const StyledText = styled.h1`
  color: var(--white);
  font-family: sans-serif;
  font-size: 72px;
  font-weight: bold;
`;

const StyledMarquee = styled(motion.div)`
  position: absolute;
  white-space: nowrap;
`;

const MarqueeExample = () => {
  return (
    <StyledMarquee
      variants={{
        animate: {
          x: [600, -600],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 5,
              ease: linear,
            },
          },
        },
      }}
      animate="animate"
    >
      <StyledText>Awesome!</StyledText>
    </StyledMarquee>
  );
};

export default MarqueeExample;
