import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template: "react tech";
  grid-template-columns: 1fr 1fr;
  padding: 3.75rem 8.5rem;
  grid-gap: 8rem;
  

  @media(max-width: 1024px){
    padding: 4rem;
  }

  @media(max-width: 768px){
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 4rem;
  }
`;

export const TechsPost = styled.div`
  grid-area: tech;

  .line{
    padding: 2rem 0;

    >div{
      border-bottom: 1px solid gray;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > p {
    font-size: 1rem;
  }

  > strong {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--dark-bg);
  }
`;
