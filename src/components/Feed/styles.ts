import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template: "react";
  grid-template-columns: 1fr 1fr 1fr;
  padding: 3.75rem 8.3rem;
  grid-gap: 2rem;           

  @media(max-width: 1024px){
    padding: 4rem;
  }

  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    padding: 4rem;
  }
`;
