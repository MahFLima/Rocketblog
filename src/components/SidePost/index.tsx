import React from "react";
import TechPost from "../TechPost";
import data from "../data";
import post1 from "../../images/post-1.png"

import { Container,  TechsPost, Info } from "./styles";

const SidePost: React.FC = () => {
  return (
    <Container>
      <TechPost img={post1} title={data[0].title} description={data[0].description}/>
      <TechsPost>
        <Info>
          <p>Janeiro 04, 2022</p>
          <strong>
            Conheça as principais técnicas para conseguir uma vaga internacional
            em programação
          </strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
            eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
            sed tristique.
          </p>
        </Info>
        <div className="line">
          <div></div>
        </div>
        <Info>
          <p>Janeiro 04, 2022</p>
          <strong>Veja a evolução do Front-end na prática</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
            eu in aliquet ut adipiscing neque.
          </p>
        </Info>
      </TechsPost>
    </Container>
  );
};

export default SidePost;
