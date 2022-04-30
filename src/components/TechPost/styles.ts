import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > p {
    font-size: 1rem;
  }

  > strong {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--dark-bg);
  }
`;

export const ImgPost1 = styled.img`
  width: 100%;
`;