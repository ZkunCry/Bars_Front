import React from "react";
import { Header } from "../ui";
import { HeaderMenu } from "../features";
import { Container } from "../ui";
import LogoBlack from "@/public/logoblack.svg";
export const SemanticHeaderProducts = () => {
  return (
    <Header className="fixed top-0 w-full  z-10 animate-fade-in  backdrop-blur-sm">
      <Container>
        <HeaderMenu
          colorLinksHover="bg-black !text-white"
          colorLinks="text-black hover:bg-black hover:text-white"
          telColor="#0000001A"
          telColorText="text-black"
          logoColor="text-black"
          navBorder="border border-black"
          logo={LogoBlack}
        />
      </Container>
    </Header>
  );
};
