import styled from "styled-components";
import { Menu, Search } from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: none;

  @media (max-width: 1190px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    background: var(--purple-bg);
    padding: 2rem;
  }
`;

export const IconMenu = styled(Menu)`
  width: 24px;
  height: 24px;
  fill: white;
  cursor: pointer;
`;
export const IconLogo = styled.img`
  width: 10rem;
  height: 2.25rem;
`;

// ---------------------------------------

export const MenuMobile = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 5;
  background: var(--purple-bg);
  top: 5rem;
  color: white;
  padding: 2rem;
  gap: 1rem;
  animation: go-back 2s;

  @keyframes go-back {
    from {
      transform: translateY(200px);
    }
    to {
      transform: translateY(0);
    }
  }

  @media (min-width: 1190px) {
    display: none;
  }
`;

export const MenuUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  > li {
    list-style: none;
    padding: 1rem 0;
    border-bottom: 1px solid white;

    &:last-child {
      border: none;
    }

    > a {
      text-decoration: none;
      color: white;
      font-size: 1rem;
    }
  }
`;

export const ContentSearch = styled.div`
  width: 100%;
  height: 2.75rem;
  display: flex;
  position: relative;

  > input {
    width: 100%;
    height: 100%;
    border: none;
    padding: 0.8rem 1.5rem;
    background: var(--dark-bg);
    font-size: 0.8rem;
    color: var(--white);
    border-radius: 4px;
  }

  > button {
    width: 4.3rem;
    height: 100%;
    background: var(--button-bg);
    border: none;
    position: absolute;
    right: 0;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
  }
`;
export const IconSearch = styled(Search)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--white);
`;
