import { Box, Image, Text, useColorMode, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import simon from "../assets/profile.png";
import simon2 from "../assets/profile2.png";

import { useNavigate } from "react-router-dom";

const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);

// Floating orb behind avatar
// const OrbRing = () => (
//   <Box
//     position="absolute"
//     top="50%"
//     left="50%"
//     transform="translate(-50%, -50%)"
//     w={{ base: "230px", md: "340px" }}
//     h={{ base: "230px", md: "340px" }}
//     borderRadius="full"
//     zIndex={0}
//     sx={{
//       background:
//         "conic-gradient(from 0deg, #ff6b00, #1a3aff, #ff6b00, #00e0ff, #ff6b00)",
//       animation: "spinRing 6s linear infinite",
//       filter: "blur(2px)",
//       opacity: 0.7,
//       "@keyframes spinRing": {
//         from: { transform: "translate(-50%, -50%) rotate(0deg)" },
//         to: { transform: "translate(-50%, -50%) rotate(360deg)" },
//       },
//     }}
//   />
// );

// Animated noise/grain overlay
// const GrainOverlay = () => (
//   <Box
//     position="fixed"
//     inset={0}
//     zIndex={2}
//     pointerEvents="none"
//     opacity={0.035}
//     // sx={{
//     //   backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
//     //   backgroundRepeat: "repeat",
//     //   backgroundSize: "128px 128px",
//     // }}
//   />
// );

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const Home = () => {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";
  const profile = isLight ? simon : simon2;
  return (
    <>
      <Box
        minH="100vh"
        // h={'100%'}
        overscroll={"auto"}
        w="100vw"
        // background={bg}
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        overflow="scroll"
        fontFamily="'DM Sans', sans-serif"
      >
        {/* Glowing blob bottom-left */}
        <Box
          position="absolute"
          bottom="-100px"
          left="-80px"
          w="400px"
          h="400px"
          borderRadius="full"
          // bg="orange.500"
          opacity={0.07}
          filter="blur(80px)"
          zIndex={0}
        />
        {/* Glowing blob top-right */}
        <Box
          position="absolute"
          top="-60px"
          right="-60px"
          w="350px"
          h="350px"
          borderRadius="full"
          // bg="blue.400"
          opacity={0.07}
          filter="blur(80px)"
          zIndex={0}
        />

        {/* Main content — two-column split */}
        <MotionBox
          variants={stagger}
          initial="hidden"
          animate="show"
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          gap={{ base: "48px", md: "80px" }}
          zIndex={3}
          px={{ base: "24px", md: "80px" }}
          maxW="1100px"
          w="100%"
        >
          {/* LEFT: Text block */}
          <Box flex={1} textAlign={{ base: "center", md: "left" }}>
            {/* Tag line */}
            <MotionBox
              variants={fadeUp}
              display="inline-flex"
              alignItems="center"
              gap="8px"
              mb={5}
            >
              <Text
                fontSize="11px"
                letterSpacing="4px"
                textTransform="uppercase"
                color="orange.300"
                fontFamily="'DM Sans', sans-serif"
                fontWeight="400"
              >
                Full Stack Developer
              </Text>
            </MotionBox>

            {/* Name */}
            <MotionBox variants={fadeUp} mb={2}>
              <Text
                as="h1"
                fontSize={{ base: "52px", md: "78px" }}
                fontFamily="'Syne', sans-serif"
                fontWeight="800"
                lineHeight="1"
                color="white"
                letterSpacing="-2px"
              >
                Simon
              </Text>
              <Text
                as="h1"
                fontSize={{ base: "52px", md: "78px" }}
                fontFamily="'Syne', sans-serif"
                fontWeight="800"
                lineHeight="1"
                letterSpacing="-2px"
                sx={{
                  WebkitTextStroke: "1px rgba(240, 238, 238, 0.84)",
                  color: "transparent",
                }}
              >
                Kamau
              </Text>
            </MotionBox>

            {/* Divider */}
            <MotionBox
              variants={fadeUp}
              w={{ base: "50%", md: "" }}
              h="2px"
              bg="linear-gradient(90deg, #534d48, #90929c)"
              my={5}
              mx={{ base: "auto", md: 0 }}
            />

            {/* Description */}
            <MotionText
              variants={fadeUp}
              fontSize={{ base: "14px", md: "16px" }}
              color="whiteAlpha.700"
              maxW="420px"
              lineHeight="1.8"
              mx={{ base: "auto", md: 0 }}
              fontWeight="300"
            >
              Crafting interactive experiences and full-stack applications that
              live at the intersection of{" "}
              <Text as="span" color="orange.300" fontWeight="400">
                performance
              </Text>{" "}
              and{" "}
              <Text as="span" color="blue.300" fontWeight="400">
                design
              </Text>
              .
            </MotionText>

            {/* Buttons */}
            <MotionBox
              variants={fadeUp}
              display="flex"
              gap="16px"
              mt={8}
              justifyContent={{ base: "center", md: "flex-start" }}
              flexWrap="wrap"
            >
              <Button
                onClick={() => navigate("/contact")}
                fontFamily="'Syne', sans-serif"
                fontWeight="700"
                fontSize="13px"
                letterSpacing="1px"
                textTransform="uppercase"
                px="28px"
                py="22px"
                borderRadius="15px"
                bg="orange.500"
                color="white"
                border="none"
                _hover={{
                  bg: "orange.400",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 30px rgba(255,107,0,0.35)",
                }}
                transition="all 0.25s ease"
              >
                Let's Talk
              </Button>
            </MotionBox>
          </Box>

          {/* RIGHT: Avatar with spinning ring */}
          <MotionBox
            variants={fadeUp}
            position="relative"
            w={{ base: "210px", md: "300px" }}
            h={{ base: "210px", md: "300px" }}
            flexShrink={0}
          >
            {/* <OrbRing /> */}

            {/* White ring mask */}
            {/* <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w={{ base: "210px", md: "300px" }}
              h={{ base: "210px", md: "300px" }}
              borderRadius="full"
              bg={bg}
              zIndex={1}
            /> */}

            {/* Avatar image */}
            <MotionBox
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w={{ base: "250px", md: "400px" }}
              h={{ base: "250px", md: "400px" }}
              borderRadius="full"
              overflow="hidden"
              zIndex={2}
              // whileHover={{ scale: 1.04 }}
              // transition={{ duration: 0.4 }}
              boxShadow="0 0 60px rgba(255,107,0,0.15)"
            >
              <Image
                loading="lazy"
                src={profile}
                alt="Simon Kamau"
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </MotionBox>

            {/* Floating badge */}
            <MotionBox
              position="absolute"
              bottom={{ base: "-10px", md: "-16px" }}
              right={{ base: "-10px", md: "-20px" }}
              zIndex={4}
              bg="rgba(10,15,30,0.9)"
              border="1px solid rgba(255,255,255,0.1)"
              backdropFilter="blur(12px)"
              borderRadius="4px"
              px="14px"
              py="8px"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Text
                fontSize="11px"
                fontWeight="700"
                letterSpacing="2px"
                textTransform="uppercase"
                color="orange.300"
                fontFamily="'Syne', sans-serif"
              >
                Available for work
              </Text>
            </MotionBox>
          </MotionBox>
        </MotionBox>

        {/* Bottom scroll hint */}
        <MotionBox
          position="absolute"
          bottom="32px"
          left="50%"
          transform="translateX(-50%)"
          zIndex={3}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="8px"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <Text
            fontSize="10px"
            letterSpacing="3px"
            textTransform="uppercase"
            color="whiteAlpha.400"
            fontFamily="'DM Sans', sans-serif"
          >
            Scroll
          </Text>
          <Box
            w="1px"
            h="32px"
            bg="linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)"
          />
        </MotionBox>
      </Box>
    </>
  );
};

export default Home;
