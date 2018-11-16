import React from "react";
import styled from "styled-components";
import image from "../images/helpus.png";
import { Flex, Text, Box, Image, Button } from "rebass";

const Wrapper = styled.div`
  width: 100vw;
  text-align: center;
  margin: 0 auto;
  overflow-y: hidden;
`;

const Opportunity = props => {
  return (
    <Wrapper id={props.id}>
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
            ¿TAMBIÉN QUIERES MEJORAR EL MUNDO?
          </Text>
        </Box>
        <Box width={[3 / 4, 1 / 3, 1 / 3]} mr={[0, 0, 50]}>
          <Image width={[1, 1, 1]} src={image} />
        </Box>
        <Box width={[1, 3 / 5, 1 / 4]}>
          <Text
            fontSize={[2, "1em", "1em"]}
            fontWeight={200}
            color="white"
            textAlign={["center", "center", "center"]}
            fontFamily="Nunito Sans"
            px={[20, 40, 0]}
            py={[40, 30, 0]}
            letterSpacing={1}
          >
            Aquí en AYNIHUB te daremos todo el apoyo necesario para que puedas
            presentar tu proyecto al mundo. Solo necesitas las una idea y listo,
            estás a bordo. ¿Tienes lo necesario?
          </Text>
        </Box>
        <Box width={[1, 1, 1]} mt={[0, 20, 50]}>
          <Button
            my={[20, 30, 30]}
            py={[15, 15, 15]}
            px={[50, 60, 50]}
            bg="#50F1BB"
            fontWeight={400}
            color="white"
            fontFamily="'Saira Condensed', sans-serif"
            fontSize={[2, 2, 2]}
          >
            CREA UN PROYECTO
          </Button>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default Opportunity;
