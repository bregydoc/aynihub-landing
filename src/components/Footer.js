import React from "react";
import styled from "styled-components";
import { Card, Text, Image, Box, Flex } from "rebass";
import miniAyni from '../images/aynihub_mini.png'
import fb from '../images/facebook.png';
import twt from '../images/twitter.png';

const Footer = props => {
  return <Flex
    p={3}
    width={"100vw"}
    color='white'
    bg='#01070F'
    justifyConten={"space-between"}

  >
    <Box width={[1, 1/3]} p={2}>
      <Image width={[0.3]} src={miniAyni}/>
      <Text fontFamily={"Nunito Sans"}  py={3} ml={2} pr={4} letterSpacing={1} fontWeight={"300"}>
        Aynihub está en desarrollo, si tienes alguna idea de lo que quisieras ver en Aynihub, no dudes en contactarnos.
      </Text>
      <Text fontFamily={"Nunito Sans"}  py={3} ml={2} letterSpacing={1}>
        +51957821858
      </Text>
      <Text fontFamily={"Nunito Sans"}  py={3} ml={2} letterSpacing={1}>
        bregy.malpartida@utec.edu.pe
      </Text>


    </Box>
    <Box width={[1, 1/3]}>
      <Flex>
        <Box width={1/2}>
          <Image src={fb} width={[0.06]}/>
        </Box>
        <Box width={1/2}>
          <Image src={twt} width={[0.1]}/>
        </Box>
      </Flex>
    </Box>
      <Box width={[1, 1/3]}>
        {" "}
      </Box>
  </Flex>;
};

export default Footer;
