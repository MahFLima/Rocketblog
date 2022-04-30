import React from "react";
import logo from "../../images/logo.svg";
import featured from "../../images/featured-image.png";

import { Container, Content, IconLogo, Menu, ContentSearch, ContentPost, PostInfo, PostImage, IconSearch, IconArrow } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <IconLogo src={logo}/>
        <Menu>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Sobre</a>
          </li>
          <li>
            <a href="">Categorias</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </Menu>
        <ContentSearch>
          <input type="text" placeholder="Buscar" />
          <button>
            <IconSearch />
          </button>
        </ContentSearch>
      </Content>
      <ContentPost>
        <PostInfo>
          <strong>
            Veja o guia definitivo para conquistar seus objetivos com DEV em
            2022
          </strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
            ipsum vitae felis facilisis fringilla. In tincidunt, libero ac
            pulvinar tincidunt, mauris nisl rhoncus dolor, id sollicitudin risus
            lectus eu velit.
          </p>
          <a href="#">
            Veja mais
            <IconArrow/>
          </a>
        </PostInfo>
        <PostImage src={featured}/>
      </ContentPost>
    </Container>
  );
};

export default Header;
