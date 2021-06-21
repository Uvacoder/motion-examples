import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimateSharedLayout } from "framer-motion";

const colors = ["rgb(225, 9, 63)", "#0099ff", "rgb(4, 255, 0)", "#ffaa00"];

const StyledList = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

const StyledItem = styled.li`
  background-color: ${(props) => props.color};
  border-radius: 100%;
  cursor: pointer;
  display: block;
  flex-shrink: 0;
  height: 80px;
  margin: 20px;
  position: relative;
  width: 80px;
`;

const StyledOutline = styled(motion.div)`
  border-radius: 50%;
  border: 10px solid white;
  bottom: -20px;
  left: -20px;
  position: absolute;
  right: -20px;
  top: -20px;
`;

const SharedLayoutExample = () => {
  const [selected, setSelected] = useState(colors[0]);

  return (
    <AnimateSharedLayout>
      <StyledList>
        {colors.map((color) => (
          <StyledItem
            color={color}
            key={color}
            onClick={() => setSelected(color)}
          >
            {selected === color && (
              <StyledOutline
                layoutId="outline"
                initial={false}
                animate={{ borderColor: color }}
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
              />
            )}
          </StyledItem>
        ))}
      </StyledList>
    </AnimateSharedLayout>
  );
};

export default SharedLayoutExample;
