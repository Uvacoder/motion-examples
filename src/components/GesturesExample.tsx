import React from "react";

import StyledMotionBox from "./StyledMotionBox";

const GesturesExample = () => {
  return (
    <StyledMotionBox
      whileHover={{ scale: 1.2, rotate: 90 }}
      whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    />
  );
};

export default GesturesExample;
