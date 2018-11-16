import React, { Component } from "react";
import styled from "styled-components";
import image from "../images/communityandinvestigation.png";
import { Flex, Text, Box, Image, Button } from "rebass";
import ArrowBottom from "../icons/ArrowBottom";

const Wrapper = styled.div`
  width: 100vw;
  text-align: center;
  margin: 0 auto;
  overflow-y: hidden;
`;

const Home = props => {
  return (
    <Wrapper>
      <Flex
        flexWrap="wrap"
        color="white"
        bg="transparent"
        alignItems="center"
        justifyContent="center"
      >
        <Box width={[1, 1 / 2, 1 / 2]} mt={[-50, 0, -30]}>
          <Image ml={[0, 0, -200, -300]} width={[1, 1, 1]} src={image} />
        </Box>

        <Box width={[1, 1 / 3, 1 / 4]} mt={[-50, 0, -50]} ml={[0, 0, -100]}>
          <Text
            fontSize={[6, 7, 7]}
            fontWeight={500}
            color="white"
            fontFamily="'Saira Condensed', sans-serif"
          >
            AYNIHUB
          </Text>
          <Text
            fontSize={[2, 2, "1em"]}
            fontWeight={200}
            color="white"
            textAlign={["center", "center", "center"]}
            fontFamily="'Nunito Sans', sans-serif"
            px={[10, 30, 0]}
            py={[20, 30, 10]}
          >
            Un espacio para la libre integración del conocimiento colectivo a
            través del financiamiento cooperativo.
          </Text>
          <Box width={["0px", "0px", 1]} mt={[0, 20, 50]}>
            <Button
              my={[20, 30, 30]}
              py={[15, 15, 15]}
              px={[50, 60, 50]}
              bg="#F9554E"
              fontWeight={400}
              color="white"
              fontFamily="'Saira Condensed', sans-serif"
              fontSize={[2, 2, 2]}
            >
              CONOCE MÁS
            </Button>
          </Box>
        </Box>
        <Box width={[1, 1, "0px"]} mt={[0, 20, 50]}>
          <Button
            my={[20, 30, 30]}
            py={[15, 15, 15]}
            px={[50, 60, 50]}
            bg="#F9554E"
            fontWeight={400}
            color="white"
            fontFamily="'Saira Condensed', sans-serif"
            fontSize={[2, 2, 2]}
          >
            CONOCE MÁS
          </Button>
        </Box>
      </Flex>
      <Text mt={[0, 0, -50]}>
        <ArrowBottom size={30} />
      </Text>
    </Wrapper>
  );
};

export default Home;
