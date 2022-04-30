import React from "react";

import { Container, ImgPost1 } from "./styles";

interface Props{
  img: string;
  title: string;
  description: string;
}

const TechPost: React.FC<Props> = ({title, description, img}) => {
  return (
    <Container>
      <ImgPost1 src={img} />
      <p>Janeiro 04, 2022</p>
      <strong>{title}</strong>
      <p>
        {description}
      </p>
    </Container>
  );
};

export default TechPost;
