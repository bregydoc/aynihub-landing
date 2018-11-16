import React from "react";
import background from "../images/linescrossover.png";
// import elparadero from "../images/el-paradero.png";
import { Card, Heading, Box } from "rebass";
import BioGeniaCorp from "../icons/BioGeniaCorp";

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
        ¿QUIÉNES CONFÍAN EN NOSOTROS?
      </Heading>
      <Box width={[1, 1, 1]} py={[150, 150, 150]}>
        <BioGeniaCorp size={50} />
      </Box>

      {/* <Image width={[1 / 2, 1 / 3, 1 / 4]} src={elparadero} /> */}
    </Card>
  );
};

export default Home;
