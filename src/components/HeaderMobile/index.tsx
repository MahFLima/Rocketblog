import React, { useRef } from "react";
import logo from "../../images/logo.svg";

import {
  Container,
  Content,
  IconMenu,
  IconLogo,
  MenuMobile,
  MenuUl,
  ContentSearch,
  IconSearch,
} from "./styles";

const HeaderMobile: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);

  function isActive() {
    divRef.current?.classList.toggle("invisible");
  }

  return (
    <Container>
      <Content>
        <IconMenu onClick={isActive} />
        <IconLogo src={logo} />
      </Content>
      <MenuMobile ref={divRef} className="invisible">
        <ContentSearch>
          <input type="text" placeholder="Buscar" />
          <button>
            <IconSearch />
          </button>
        </ContentSearch>
        <MenuUl>
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
        </MenuUl>
      </MenuMobile>
    </Container>
  );
};

export default HeaderMobile;
