import styled from 'styled-components';
import {Search, ArrowRight} from '../../styles/Icons'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 4.25rem 8.5rem;
  background: var(--purple-bg);
  color: var(--white);
  border-bottom: 6px solid var(--green);

  @media(max-width: 768px) {
    padding: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1190px){
    display: none;
  }
`

export const IconLogo = styled.img`
  width: 10rem;
  height: 2.25rem;
`

export const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  
  >li{
    color: white;
    list-style: none;
    >a{
      text-decoration: none;
      color: var(--white);
      font-size: 18px;
      font-weight: 400, Regular;
    }
  }
`  
export const ContentSearch = styled.div`
  width: 18.75rem;
  height: 2.75rem;
  display: flex;
  position: relative;

  >input{
    width: 100%;
    height: 100%;
    border: none;
    padding: 0.8rem 1.5rem;
    background: var(--dark-bg);
    font-size: 0.8rem;
    color: var(--white);
    border-radius: 4px;
  }

  >button{
    width: 4.3rem;
    height: 100%;
    background: var(--button-bg);
    border: none;
    position: absolute;
    right: 0;
    border-radius: 0 4px 4px 0;
    cursor: pointer;

    &:hover{
      opacity: 0.7;
    }
  }
`

export const IconSearch = styled(Search)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--white);
`

export const ContentPost = styled.div`
  display: grid;
  grid-template: "content image";
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.8rem;
  animation: go 2s;
  @keyframes go {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}

  @media(max-width: 1220px){
    display: flex;
    flex-direction: column;
  }

`
export const PostInfo = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  >strong{
    font-size: 2.25rem;
    font-family: Poppins, sans-serif;
    color: var(--button-bg);
    font-weight: 700;
  }
  >p{
    font-size: 18px;
    font-weight: 400;
    color: var(--light-purple);
  }
  >a{
    text-decoration: none;
    gap: 1rem;
    font-size: 18px;
    font-weight: 700;
    color: var(--button-bg);
  }
`

export const IconArrow = styled(ArrowRight)`
  width: 1.5rem;
  height: 1.5rem;
  fill: var(--green);
  margin-left: 1rem;
`

export const PostImage = styled.img`
  grid-area: image;
  align-items: center;
  object-fit: contain;
 
`