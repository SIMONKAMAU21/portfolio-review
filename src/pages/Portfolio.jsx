import { Box, Button, Card, CardBody, CardHeader, Flex, Heading, Image, Link, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { localImages } from '../utils/imageUtils';

const Projects = () => {
  const kamau = localImages();
  const primaryColor = useColorModeValue('blue.400', 'orange.400');
  const secondaryColor = useColorModeValue('orange.400', 'blue.400');

  const headingStyles = {
    fontSize: { base: '24px', md: '28px', lg: '32px' },
    textAlign: 'center',
    w: '100%',
    mb: 6,
  };

  const cardStyles = {
    boxShadow: 'lg',
    p: { base: 1, md: 6 },
    bg: useColorModeValue('gray.50', 'gray.800'),
    borderRadius: 'md',
  };

  const imageStyles = {
    // w: '90%',
    // h: '350px',
    objectFit: 'cover',
    borderRadius: 'md',
    _hover: { transform: 'scale(1.40)', transition: 'transform 0.3s ease' },
  };

  const buttonStyles = {
    bg: primaryColor,
    color: 'white',
    _hover: { bg: secondaryColor },
  };

  const projects = [
    {
      title: 'Kcb portal',
      description: 'A brief description of the project. Highlight key features, technologies used, and the impact it had.',
      image: kamau[7],
      links: {
        github: 'https://github.com/SIMONKAMAU21/KCB-portal.gi',
        live: 'https://kcb-portal.vercel.app/',
      },
    },
    {
      title: 'click to chat',
      description: 'Click to Chat is a convenient tool that allows you to initiate a WhatsApp chat with any phone number without having to save the contact in your phone. This app aims to simplify the process of connecting with people on WhatsApp, especially for one-time conversations.',
      image: kamau[4],
      links: {
        github: 'https://github.com/SIMONKAMAU21/click-to-chat.git',
        live: 'https://click-to-chat.vercel.app/',
      },
    },
  ];
  const bgGradient = useColorModeValue('linear(to-r, blue.900, orange.700)', 'linear(to-r, orange.400, blue.400)');

  return (
    <>
      <Card sx={cardStyles}>
        <CardHeader>
          <Heading sx={headingStyles} bgGradient={bgGradient} bgClip="text">Projects</Heading>
        </CardHeader>
        <CardBody>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {projects && projects.map((project, index) => (
              <Box key={index} w={{base:"100%"}} p={{base:"10px"}} borderWidth="1px" borderRadius="md">
                <Heading size="md" mb={4}>{project.title}</Heading>
                <Image src={project.image} alt="project image" sx={imageStyles} />
                <Text mt={4}>{project.description}</Text>
                {project.links && (
                  <Flex mt={4} gap={4}>
                    <Button as="a" href={project.links.github} sx={buttonStyles}>
                      GitHub
                    </Button>
                    <Button as="a" href={project.links.live} sx={buttonStyles}>
                      Visit
                    </Button>
                  </Flex>
                )}
              </Box>
            ))}
          </SimpleGrid>
        </CardBody>
      </Card>
    </>
  );
}

export default Projects;
