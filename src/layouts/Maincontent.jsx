import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import {
  HStack,
  Box,
  VStack,
  useBreakpointValue,
  SkeletonCircle,
  SkeletonText,
  useColorMode,
} from "@chakra-ui/react";
import Images from "../components/images/Images";
import { localImages } from "../utils/imageUtils";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Service = lazy(() => import("../pages/Service"));
const Contact = lazy(() => import("../pages/Contact"));
const Projects = lazy(() => import("../pages/Portfolio"));

const Maincontent = () => {
  const marginLeft = useBreakpointValue({ base: "0vw", md: "15vw" });
  const { colorMode } = useColorMode();

  return (
    <VStack
      minH="100vh"
      justify="center"
      align="center"
      spacing={4}
      width="100vw"
      sx={{
        scrollbarWidth: "none", // For Firefox
        "&::-webkit-scrollbar": { display: "none" }, // For Chrome, Safari
      }}
      // bg={"red"}
      //  bgImage="linear-gradient(black, white)"
      bgImage={
        colorMode === "dark"
          ? "url('/assets/images.jpeg')"
          : "url('https://cdn.builder.io/api/v1/image/assets/2c862b2eca824ba8944134157d096d85/0f3cf91cd9e704eeb0148488c21fc06c4b1140ecbe0a65b748a23dc8f9a2926f?apiKey=2c862b2eca824ba8944134157d096d85&')"
      }
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Navbar />
      <HStack
        // align="start"
        spacing={0}
        justify="center"
        width={{ base: "100%", md: "70vw" }}
      >
        <Sidebar />
        <Box
          flex="2"
          maxW={{ base: "100%", md: "80vw" }}
          p={{ base: 1, md: 4 }}
            sx={{
        scrollbarWidth: "none", // For Firefox
        "&::-webkit-scrollbar": { display: "none" }, // For Chrome, Safari
      }}
          ml={marginLeft}
          // bg={"red"}
          h={{ base: "100vh", md: "100vh" }}
          mt={{ base: "60px", md: "60px" }}
          overflow="hidden"
        >
          <Suspense
            fallback={
              <VStack h="100vh" width={{ base: "90vw", md: "40vw" }}>
                <Box padding="6" boxShadow="lg" h="100%" w="100%">
                  <SkeletonCircle size="10" />
                  <SkeletonText
                    mt="4"
                    noOfLines={8}
                    spacing="4"
                    skeletonHeight="8"
                  />
                </Box>
              </VStack>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Service />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </Suspense>
        </Box>
      </HStack>
    </VStack>
  );
};

export default Maincontent;
