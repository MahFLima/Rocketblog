import React, { useRef } from 'react';
import Feed from '../Feed';
import Header from '../Header';
import HeaderMobile from '../HeaderMobile';
import SidePost from '../SidePost';

import { Container } from './styles';

const Page: React.FC = () => {
  

  return (
    <Container>
      <HeaderMobile/>
      <Header/>
      <SidePost/>
      <Feed/>
    </Container>
  );
}

export default Page;