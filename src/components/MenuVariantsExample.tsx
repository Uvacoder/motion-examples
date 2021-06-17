import React, { useRef } from "react";
import styled from "styled-components";
import { motion, SVGMotionProps, useCycle } from "framer-motion";

import useDimensions from "../hooks/useDimensions";

const StyledSidebar = styled(motion.div)`
  background: var(--white);
  bottom: 0;
  left: 0;
  position: absolute;
  top: 0;
  width: 250px;
`;

const StyledMenu = styled(motion.ul)`
  padding: 15px;
  position: absolute;
  top: 70px;
  width: 200px;
`;

const StyledMenuItem = styled(motion.li)`
  border: 2px solid var(--primary);
  list-style: none;
  margin-bottom: 20px;
  padding: 10px;
  z-index: 100;
`;

const StyledToggleButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 19px;
  left: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
`;

const Path = (
  props: JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement>
) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

interface MenuToggleProps {
  toggle: () => void;
}

const MenuToggle = ({ toggle }: MenuToggleProps) => (
  <StyledToggleButton onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </StyledToggleButton>
);

const MenuVariantsExample = () => {
  const [open, toggleOpen] = useCycle(false, true);
  const ref = useRef(null);
  const { h } = useDimensions(ref);

  const items = [0, 1, 2, 3];
  const sidebarVariants = {
    open: (h = 1000) => ({
      clipPath: `circle(${h * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const menuVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const menuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.nav
      initial={false}
      animate={open ? "open" : "closed"}
      custom={h}
      ref={ref}
    >
      <StyledSidebar variants={sidebarVariants} />
      <MenuToggle toggle={() => toggleOpen()} />
      <StyledMenu variants={menuVariants}>
        {items.map((item) => {
          return <StyledMenuItem key={item} variants={menuItemVariants} />;
        })}
      </StyledMenu>
    </motion.nav>
  );
};

export default MenuVariantsExample;
