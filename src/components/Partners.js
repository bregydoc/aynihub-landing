import React from "react";
import styled from "styled-components";
import background from "../images/linescrossover.png";
import elparadero from "../images/el-paradero.png";
import { Card, Heading, Image } from "rebass";

const Home = props => {
  return (
    <Card
      p={4}
      py={6}
      backgroundImage={`url(${background})`}
      backgroundSize="cover"
      color="white"
      m={"0 auto"}
      {...props}
      css={{
        textAlign: "center"
      }}
    >
      <Heading
        textAlign="center"
        fontSize={[5, 6]}
        fontWeight={400}
        fontFamily="'Saira Condensed', sans-serif"
      >
        CONFIAN EN NOSOTROS
      </Heading>
      <Image width={[1 / 2, 1 / 3, 1 / 4]} src={elparadero} />
    </Card>
  );
};

export default Home;
