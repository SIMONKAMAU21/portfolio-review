import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import {
  HStack,
  Box,
  Button,
  useBreakpointValue,
  VStack,
  Spinner,
  Text,
  Skeleton, SkeletonCircle, SkeletonText 
} from "@chakra-ui/react";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Service = lazy(() => import("../pages/Service"));
const Contact = lazy(() => import("../pages/Contact"));
const Portfolio = lazy(() => import("../pages/Portfolio"));

const Maincontent = () => {
  const marginLeft = useBreakpointValue({ base: "0", md: "20%" });

  return (
    <>
      <Navbar />
      <HStack align="start" spacing={0} mt="60px">
        <Sidebar />
        <Box flex="2" p={4} ml={marginLeft} w="100%" overflow="hidden">
          <Suspense
            fallback={
              <VStack  h="100vh" width='100vw'>
                <Box padding="6" boxShadow="lg" bg="white" h='100%' w='100%'>
                  <SkeletonCircle size="10" />
                  <SkeletonText
                    mt="4"
                    noOfLines={4}
                    spacing="4"
                    skeletonHeight="2"
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
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </Suspense>
        </Box>
      </HStack>
    </>
  );
};

export default Maincontent;
