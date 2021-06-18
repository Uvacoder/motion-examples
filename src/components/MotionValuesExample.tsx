import React from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";

const StyledAbsoluteMotionBox = styled(motion.div)`
  align-items: center;
  background: var(--white);
  border-radius: 20%;
  display: flex;
  height: 100px;
  justify-content: center;
  left: calc(50%-100px / 2);
  position: absolute;
  top: calc(50%-100px / 2);
  width: 100px;
`;

const StyledSVG = styled.svg`
  height: 80%;
  width: 80%;
`;

const MotionValuesExample = () => {
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const color = useTransform(x, xInput, [
    "rgb(225, 9, 63)",
    "#df367c",
    "rgb(4, 255, 0)",
  ]);
  const tickPath = useTransform(x, [10, 100], [0, 1]);
  const crossPathA = useTransform(x, [-10, -55], [0, 1]);
  const crossPathB = useTransform(x, [-50, -100], [0, 1]);

  return (
    <StyledAbsoluteMotionBox
      style={{ x }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
    >
      <StyledSVG viewBox="0 0 50 50">
        <motion.path
          fill="none"
          strokeWidth="2"
          stroke={color}
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{ translateX: 5, translateY: 5 }}
        />
        <motion.path
          fill="none"
          strokeWidth="2"
          stroke={color}
          d="M14,26 L 22,33 L 35,16"
          strokeDasharray="0 1"
          style={{ pathLength: tickPath }}
        />
        <motion.path
          fill="none"
          strokeWidth="2"
          stroke={color}
          d="M17,17 L33,33"
          strokeDasharray="0 1"
          style={{ pathLength: crossPathA }}
        />
        <motion.path
          fill="none"
          strokeWidth="2"
          stroke={color}
          d="M33,17 L17,33"
          strokeDasharray="0 1"
          style={{ pathLength: crossPathB }}
        />
      </StyledSVG>
    </StyledAbsoluteMotionBox>
  );
};

export default MotionValuesExample;
