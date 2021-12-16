import { Container, Flex, Text } from "@chakra-ui/react";
import { memo, useCallback } from "react";
import { useHistory } from "react-router-dom";
import {
  MotionBox,
  MotionContainer,
  MotionFlex,
  MotionImage,
} from "../animations/variants";
import Insigne from "../assets/Insigne.JPG";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

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
      <MotionContainer
        maxW="container.xl"
        exit={{ opacity: 0 }}
        transition={transition}
      >
        <Flex pt="10" justifyContent="space-between">
          <MotionFlex variants={Name} fontSize="2xl">
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
          <MotionFlex
            mt="32"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
          >
            <MotionImage
              width="524"
              height="450"
              src={Insigne}
              onClick={onClickModel}
              whileHover={{ scale: 1.1 }}
              transition={transition}
            ></MotionImage>
          </MotionFlex>
          <MotionFlex
            justifyContent="space-between"
            mt={6}
            exit={{ opacity: 0 }}
            transition={transition}
          >
            <MotionBox>222222222222</MotionBox>
            <MotionBox mb="20">4444444444444</MotionBox>
          </MotionFlex>
        </Container>
      </MotionContainer>
    </MotionBox>
  );
});
