import React from "react";
import background from "../images/linescrossover.png";
// import elparadero from "../images/el-paradero.png";
import { Card, Heading, Box, Text, Button } from "rebass";
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
        fontFamily="Saira Condensed"
      >
        ¿QUIÉNES CONFÍAN EN NOSOTROS?
      </Heading>
      <Box width={[1, 1, 1]} py={[150, 150, 150]}>
        <BioGeniaCorp size={40} />
      </Box>

      <Text fontFamily="Nunito Sans"
            fontWeight={300}
            px={[0, 0, 0]}
            py={[40, 30, 0]}
            letterSpacing={1}>
        Si estás interesado en ayudar a construir Aynihub, no dudes encontactarte con nosotros.

      </Text>
      <Box mt={3}>
        {/*<a href={"mailto:bregy.malpartida@utec.edu.pe?Subject=Partners%20program"}>*/}
        <Button bg="#ECF2FE"
                fontFamily="Saira Condensed"
                fontWeight={500}
                color={"#041528"}
                onClick={props.onPartnersProgram}
        >
          PARTNERS PROGRAM
        </Button>
      </Box>
      {/* <Image width={[1 / 2, 1 / 3, 1 / 4]} src={elparadero} /> */}
    </Card>
  );
};

export default Home;
