import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import {
  HStack,
  Box,
  useBreakpointValue,
  VStack,
   SkeletonCircle, SkeletonText 
} from "@chakra-ui/react";
// import Projects from "../pages/Portfolio";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Service = lazy(() => import("../pages/Service"));
const Contact = lazy(() => import("../pages/Contact"));
const Projects = lazy(() => import("../pages/Portfolio"));

const Maincontent = () => {
  const marginLeft = useBreakpointValue({ base: "", md: "20%" });

  return (
    <>
      <Navbar />
      <HStack align="start" spacing={0} mt="60px">
        <Sidebar />
        <Box flex="2"   p={{base:1,md:4}} ml={marginLeft} w="100%" overflow="hidden">
          <Suspense
            fallback={
              <VStack  h="100vh" width={{base: '90vw' ,md:'80vw'}}>
                <Box padding="6" boxShadow="lg"  h='100%' w='100%'>
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
              <Route path="/projects" element={<Projects/>} />
            </Routes>
          </Suspense>
        </Box>
      </HStack>
    </>
  );
};

export default Maincontent;
