import React from "react";
import { Text, Image, Box, Flex } from "rebass";
import miniAyni from "../images/aynihub_mini.png";
import fb from "../images/facebook.png";
import twt from "../images/twitter.png";

const Footer = props => {
  return (
    <Flex
      flexWrap="wrap"
      p={3}
      width={"100vw"}
      color="white"
      bg="#01070F"
      justifyConten={"space-between"}
    >
      <Box width={[1, 1 / 2, 1 / 3]} p={2}>
        <Image width={[0.3]} src={miniAyni} />
        <Text
          fontFamily={"Nunito Sans"}
          py={3}
          ml={2}
          pr={4}
          letterSpacing={1}
          fontWeight={300}
        >
          Estamos en desarrollo, si tienes alguna idea de lo que quisieras
          ver en Aynihub, no dudes en contactarnos.
        </Text>
        <Text fontFamily={"Nunito Sans"} py={3} ml={2} letterSpacing={1} fontWeight={300}>
          +51957821858
        </Text>
        <Text fontFamily={"Nunito Sans"} py={3} ml={2} letterSpacing={1} fontWeight={300}>
          bregy.malpartida@utec.edu.pe
        </Text>
      </Box>
      <Box width={[1, 1 / 2, 1 / 3]}>
        <Flex justifyContent={"center"}>
          <Text>
            <Image src={fb} height={[20, 25, 30]} mx={[20, 25, 30]} />
          </Text>
          <Text>
            <Image src={twt} height={[20, 25, 30]} mx={[20, 25, 30]} />
          </Text>
        </Flex>
      </Box>
      <Box width={[0, 0, 1 / 3]}> </Box>
    </Flex>
  );
};

export default Footer;
