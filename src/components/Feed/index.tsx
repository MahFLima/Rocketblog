import React from 'react';
import TechPost from '../TechPost';
import data from '../data'

import post2 from "../../images/post-2.png"
import post3 from "../../images/post-3.png"
import post4 from "../../images/post-4.png"

import { Container } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <TechPost img={post2}  title={data[1].title} description={data[1].description}/>
      <TechPost img={post3}  title={data[2].title} description={data[2].description}/>
      <TechPost img={post4}  title={data[3].title} description={data[3].description}/>
    </Container>
  );
}

export default Feed;