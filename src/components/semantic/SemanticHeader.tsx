import React from "react";
import { Container, Header } from "../ui";

import { HeaderMenu } from "../features";

export const SemanticHeader = () => {
  return (
    <Header className="fixed top-0 w-full  z-10 animate-fade-in bg-black/20 backdrop-blur-sm">
      <Container>
        <HeaderMenu />
      </Container>
    </Header>
  );
};
