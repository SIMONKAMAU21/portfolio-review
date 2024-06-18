import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Service from '../pages/Service';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Sidebar from './Sidebar';
import { HStack, Box, useBreakpointValue } from '@chakra-ui/react';

const Maincontent = () => {
  const marginLeft = useBreakpointValue({ base: '0', md: '20%' });

  return (
    <>
      <Navbar />
      <HStack align="start" spacing={0} mt="60px">
        <Sidebar />
        <Box flex="2" p={4} ml={marginLeft} w="100%" overflow="hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </Box>
      </HStack>
    </>
  );
};

export default Maincontent;
