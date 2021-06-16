import React from "react";

import StyledMotionBox from "./StyledMotionBox";

const BasicSpringExample = () => {
  return (
    <StyledMotionBox
      initial={{ scale: 0 }}
      animate={{ rotate: 180, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    />
  );
};

export default BasicSpringExample;
