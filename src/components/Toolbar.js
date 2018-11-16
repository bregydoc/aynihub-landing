import React from "react";
import { Box, Flex, Text, Link } from "rebass";
import LogoIcon from "../icons/LogoIcon";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Saira Condensed", sans-serif;
`;

const Toolbar = props => {
  return (
    <Wrapper>
      <Flex
        px={2}
        color="white"
        bg="transparent"
        alignItems="center"
        {...props}
        css={{
          zIndex: "5"
        }}
      >
        <Text p={3} fontWeight={[400]} fontSize={["0px", 2, 3, 3]}>
          <LogoIcon size={30} />
          AYNIHUB
        </Text>
        <Box mx="auto" />
        <Link
          href="#home"
          p={3}
          px={[1, 2, 4]}
          color="white"
          fontSize={["0px", 2, 3, 3]}
          {...props}
          css={{
            display: "block",
            textDecoration: "none",
            fontWeight: "300"
          }}
        >
          HOME
        </Link>
        <Link
          href="#howworks"
          p={3}
          px={[1, 2, 4]}
          color="white"
          fontSize={["0px", 2, 3, 3]}
          {...props}
          css={{
            display: "block",
            textDecoration: "none",
            fontWeight: "300"
          }}
        >
          CÓMO FUNCIONA
        </Link>
        <Link
          href="#howweare"
          p={3}
          px={[1, 2, 4]}
          color="white"
          fontSize={["0px", 2, 3, 3]}
          {...props}
          css={{
            display: "block",
            textDecoration: "none",
            fontWeight: "300"
          }}
        >
          QUIÉNES SOMOS
        </Link>
        {/* <Link
          href="#subscribe"
          p={3}
          px={[1, 2, 4]}
          color="white"
          fontSize={[2, 2, 3, 3]}
          {...props}
          css={{
            display: "block",
            textDecoration: "none",
            fontWeight: "300"
          }}
        >
          CONTÁCTANOS
        </Link> */}
      </Flex>
    </Wrapper>
  );
};

export default Toolbar;
