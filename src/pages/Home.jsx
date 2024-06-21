import React from 'react';
import {
  Box,
  Image,
  Text,
  useColorMode,
  VStack,
  Heading,
  HStack,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import simon from '../assets/simo.jpg';
import { useNavigate } from 'react-router-dom';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const Home = () => {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const bgGradient = useColorModeValue('linear(to-r, blue.900, orange.500)', 'linear(to-r, orange.400, blue.400)');
  const button = useColorModeValue('orange.400', 'blue.400');
  const handleContact = () => {
    navigate('/contact');
  };

  const cvLink = "https://drive.google.com/file/d/1ECkv6VOwyWoHjGakvhHcyGfJ9vtO-zYP/view?usp=drive_link";

  return (
    <Box
      position='relative'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      minHeight='100vh'
      bgSize='cover'
      bgPosition='center'
      p={{ base: '10px', md: '20px' }}
    >
      <Box
        position='absolute'
        top='0'
        left='0'
        right='0'
        bottom='0'
        bgGradient='rgba(0, 0, 0, 0.6)'
      ></Box>
      <MotionBox
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        zIndex='1'
        textAlign='center'
        justifyContent='center'
        alignItems='center'
      >
        <MotionImage
          borderRadius='full'
          boxSize={{ base: '200px', md: '300px' }}
          src={simon}
          alt='Simon Kamau'
          mb={4}
          ml='20%'
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <VStack spacing={4} align="center">
          <Heading as='h1' size='2xl' bgGradient={bgGradient} bgClip='text'>
            Simon Kamau
          </Heading>
          <Text fontSize='lg' maxW='600px' fontWeight='bold'>
            Full Stack Developer passionate about creating interactive applications and experiences on the web.
          </Text>
          <HStack spacing='20px' mt={4}>
            <Button bg={button} border='1px solid gray' onClick={handleContact}>Contact</Button>
            <a href={cvLink} download>
              <Button bg='none' border='1px solid gray'>Download CV</Button>
            </a>
          </HStack>
        </VStack>
      </MotionBox>
    </Box>
  );
};

export default Home;
