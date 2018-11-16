import React from "react";
import styled from "styled-components";
import image from "../images/whatsaynihub.png";
import { Flex, Text, Box, Image } from "rebass";

const Wrapper = styled.div`
  width: 100vw;
  text-align: center;
  margin: 0 auto;
  overflow-y: hidden;
`;

const WhatsAynihub = props => {
  return (
    <Wrapper>
      <Flex
        flexWrap="wrap"
        color="white"
        bg="transparent"
        alignItems="center"
        justifyContent="center"
        my={[50, 70, 100]}
      >
        <Box width={[1, 1, 1]} mb={[30, 40, 70]}>
          <Text
            fontSize={[5, 6]}
            fontWeight={400}
            color="white"
            fontFamily="'Saira Condensed', sans-serif"
          >
            ¿QUÉ ES AYNIHUB?
          </Text>
        </Box>

        <Box width={[1, 1 / 3, 1 / 4]} mr={[0, 0, 50]}>
          <Text
            fontSize={[2, 2, "1em"]}
            fontWeight={200}
            color="white"
            textAlign={["center", "center", "center"]}
            fontFamily="'Nunito Sans', sans-serif"
            px={[20, 40, 0]}
          >
            The world has become so fast paced that people don’t want to stand
            by reading a page of information, they would much rather look at a
            presentation.
          </Text>
        </Box>
        <Box width={[3 / 4, 1 / 3, 1 / 3]}>
          <Image width={[1, 1, 1]} src={image} />
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default WhatsAynihub;
