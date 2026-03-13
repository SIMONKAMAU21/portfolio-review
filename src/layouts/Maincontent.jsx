import  { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import {
  HStack,
  Box,
  VStack,
  useBreakpointValue,
  SkeletonCircle,
  SkeletonText,
  useColorMode,
} from "@chakra-ui/react";


const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Service = lazy(() => import("../pages/Service"));
const Contact = lazy(() => import("../pages/Contact"));
const Projects = lazy(() => import("../pages/Portfolio"));

const Maincontent = () => {
  const marginLeft = useBreakpointValue({ base: "0vw", md: "0vw" });
  const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

  const bg = isDark
    ? "linear-gradient(135deg, #060a14 0%, #26282c 60%, #100a05 100%)"
    : "linear-gradient(135deg, #202227 0%, #2c3a53 60%, #172876 100%)";

  return (
    <VStack
      minH="100vh"
      justify="center"
      align="center"
      spacing={4}
      bg={bg}
      width="100vw"
      sx={{
        scrollbarWidth: "none", // For Firefox
        "&::-webkit-scrollbar": { display: "none" }, // For Chrome, Safari
      }}
      // bg={"red"}
      //  bgImage="linear-gradient(black, white)"
      // bgImage={
      //   colorMode === "dark"
      //     ? "url('/assets/images.jpeg')"
      //     : "url('https://cdn.builder.io/api/v1/image/assets/2c862b2eca824ba8944134157d096d85/0f3cf91cd9e704eeb0148488c21fc06c4b1140ecbe0a65b748a23dc8f9a2926f?apiKey=2c862b2eca824ba8944134157d096d85&')"
      // }
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Navbar />
      <HStack
        // align="start"
        spacing={0}
        justify="center"
        width={{ base: "100%", md: "" }}
      >
        {/* <Sidebar /> */}
        <Box
          flex="2"
          maxW={{ base: "100%", md: "" }}
          p={{ base: 1, md: 4 }}
          overflow={'scroll'}
            sx={{
        scrollbarWidth: "none", // For Firefox
        "&::-webkit-scrollbar": { display: "none" }, // For Chrome, Safari
      }}
          ml={marginLeft}
          h={{ base: "100vh", md: "100vh" }}
          mt={{ base: "60px", md: "60px" }}
          // overflow="hidden"
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
