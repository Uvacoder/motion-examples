import styled from "styled-components";

const StyledCard = styled.div`
  align-items: center;
  background: linear-gradient(0.45turn, var(--primary), var(--accent));
  border-radius: 10px;
  display: ${(props) => (props.disableFlex ? "block" : "flex")};
  height: 100%;
  justify-content: center;
  min-height: 300px;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export default StyledCard;
