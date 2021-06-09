import styled from "styled-components";

export default function SectionLayout({ children, title }) {
  return (
    <StyledSectionWrapper>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledSectionWrapper>
  );
}

const StyledSectionWrapper = styled.div`
  max-width: 1100px;
  padding: 0 1rem;
  margin: 4rem auto;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const StyledTitle = styled.h4``;
