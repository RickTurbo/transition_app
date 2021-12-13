import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { memo, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { MotionBox, MotionFlex, MotionImage } from "../animations/variants";
import Insigne from "../assets/Insigne.JPG";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export const Name = {
  hidden: {
    y: 0,
  },
  visible: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

export const letter = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ...transition },
  },
};

export const Home = memo(() => {
  const history = useHistory();
  const onClickModel = useCallback(() => history.push("/model"), [history]);

  return (
    <MotionBox
      bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
      initial="hidden"
      animate="visible"
    >
      <Container maxW="container.xl">
        <Flex mt="20" justifyContent="space-between">
          <MotionFlex variants={Name} fontSize="3xl">
            <MotionBox variants={letter}>L</MotionBox>
            <MotionBox variants={letter}>o</MotionBox>
            <MotionBox variants={letter}>r</MotionBox>
            <MotionBox variants={letter}>e</MotionBox>
            <MotionBox variants={letter}>n</MotionBox>
            <MotionBox variants={letter}>z</MotionBox>
            <MotionBox variants={letter}>o</MotionBox>
            <MotionBox variants={letter} mr={4}></MotionBox>
            <MotionBox variants={letter}>I</MotionBox>
            <MotionBox variants={letter}>n</MotionBox>
            <MotionBox variants={letter}>s</MotionBox>
            <MotionBox variants={letter}>i</MotionBox>
            <MotionBox variants={letter}>g</MotionBox>
            <MotionBox variants={letter}>n</MotionBox>
            <MotionBox variants={letter}>e</MotionBox>
          </MotionFlex>
          <Text>ssssssssssss</Text>
        </Flex>
        <Container maxW="sm">
          <Flex mt="32" justifyContent="center" alignItems="center">
            <MotionImage
              width="524"
              height="450"
              src={Insigne}
              onClick={onClickModel}
              whileHover={{ scale: 1.1 }}
            ></MotionImage>
          </Flex>
          <MotionFlex justifyContent="space-between" mt={6}>
            <MotionBox>222222222222</MotionBox>
            <MotionBox mb="20">4444444444444</MotionBox>
          </MotionFlex>
        </Container>
      </Container>
    </MotionBox>
  );
});
