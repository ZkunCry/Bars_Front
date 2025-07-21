import React from "react";
import { Header } from "../ui";
import { HeaderMenu } from "../features";
import { Container } from "../ui";
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
        />
        {/* <div className="flex justify-between items-center text-white py-[1.375rem]">
          <div className="logo text-black">Лого</div>
          <Nav className="border border-black  rounded-[8px]">
            <MenuLinks
              colorLinksHover="bg-black !text-white"
              colorLinks="text-black hover:bg-black hover:text-white"
            />
          </Nav>
          <div className="flex justify-center items-center bg-[#0000001A] text-black py-[0.9rem] rounded-[8px] px-[16px]">
            <Link href={"tel:+7 (000) 000-00-00 "}>+7 (3462) 24‒14‒44</Link>
          </div>
        </div> */}
      </Container>
    </Header>
  );
};
