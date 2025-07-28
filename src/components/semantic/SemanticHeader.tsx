import React from "react";
import { Container, Header } from "../ui";

import { HeaderMenu } from "../features";
import LogoWhite from "@/public/logowhite.svg";
export const SemanticHeader = () => {
  return (
    <Header className="fixed top-0 w-full  z-10 animate-fade-in bg-black/20 backdrop-blur-sm">
      <Container>
        <HeaderMenu logo={LogoWhite} />
      </Container>
    </Header>
  );
};
