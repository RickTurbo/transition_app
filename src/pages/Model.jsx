import {  Container, Flex, Image, } from "@chakra-ui/react";
import { memo } from "react";
import { Link } from "react-router-dom";
import { MotionBox, MotionFlex } from "../animations/variants";
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
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ...transition },
  },
};

export const Model = memo(() => {
  return (
    <MotionBox
      bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
      initial="hidden"
      animate="visible"
    >
      <Container maxW="container.xl">
        <Flex fontSize='2xl'>
          <Link to='/'>back</Link>
        </Flex>
        <Flex  justifyContent="center">
          <MotionFlex variants={Name} fontSize="8xl" pt="20">
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
        </Flex>
      </Container>
      <Flex justifyContent="center" alignItems="center">
        <Image mt="20" width="100%" src={Insigne}></Image>
      </Flex>
    </MotionBox>
  );
});
