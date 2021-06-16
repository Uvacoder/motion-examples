import styled from "styled-components";

const StyledMain = styled.main`
  background: var(--background);
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  min-height: 100vh;
  padding: 1rem;
  align-items: center;
`;

export default StyledMain;
