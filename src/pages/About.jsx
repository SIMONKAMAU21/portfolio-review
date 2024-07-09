import React from 'react';
import Images from '../components/images/Images';
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  Stack,
  SimpleGrid,
  Divider,
  Icon,
  useColorModeValue,
  Button,
  HStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGit, FaDocker } from 'react-icons/fa';
import simon from '../assets/simo.jpg';
import { localImages } from '../utils/imageUtils';
import { Link } from 'react-router-dom';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const About = () => {
  const grey = useColorModeValue('blue.400', 'orange.400');
  const headingStyles = {
    fontSize: { base: '20px', md: '22px', lg: '24px' },
    textAlign: 'center',
    w: '100%',
  };

  const imageStyles = {
    w: { base: '100%', md: '45%' },
    h: 'auto',
    objectFit: 'cover',
    borderRadius: 'md',
    whileHover: { scale: 1.05 },
    transition: { duration: 0.3 },
  };

  

  const kamau = localImages();

  const skills = [
    { icon: FaJs, label: 'JavaScript' },
    { icon: FaNodeJs, label: 'Express' },
    { icon: FaReact, label: 'React' },
    { icon: FaHtml5, label: 'HTML' },
    { icon: FaCss3Alt, label: 'CSS/SCSS' },
    { icon: FaCss3Alt, label: 'Chakra UI' },
    { icon: FaGit, label: 'Git' },
    { icon: FaDocker, label: 'Docker' },
  ];

  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of the project. Highlight key features, technologies used, and the impact it had.',
      links: {
        github: 'https://github.com/SIMONKAMAU21/To-do-App.git',
        live: 'https://kcb-portal.vercel.app/',
      },
    },
    {
      title: 'Project 2',
      description: 'Click to Chat is a convenient tool that allows you to initiate a WhatsApp chat with any phone number without having to save the contact in your phone. This app aims to simplify the process of connecting with people on WhatsApp, especially for one-time conversations.',
      image:kamau[5],
      links: {
        github: 'https://github.com/SIMONKAMAU21/Hiphonic_Client_React.git',
        live: 'https://click-to-chat.vercel.app/',
      },
    },
  ];
  const blogPreviews = [
    {
      image: kamau[0],
      alt: 'Blog 1',
      text: 'Exploring the intricacies of modern web development, I delve into the latest trends and technologies that are shaping the industry. From JavaScript frameworks to the nuances of responsive design, join me as I share insights and experiences from my journey as a developer.',
    },
    {
      image: kamau[1],
      alt: 'Blog 2',
      text: 'In this post, I discuss the importance of maintaining a healthy work-life balance as a developer. Balancing the demands of coding and personal life can be challenging, but with the right strategies, it\'s possible to achieve harmony and prevent burnout.',
    },
  ];

  return (
    <Box h='100vh' w={{ base: '95vw', md: '80vw' }} overflowY='auto'>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>About</Tab>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Images</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <VStack alignItems='center' spacing={6}>
              <Card w='100%' boxShadow='lg'>
                <CardHeader>
                  <Heading sx={headingStyles}>About Me</Heading>
                </CardHeader>
                <CardBody>
                  <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems='center' gap='10px'>
                    <MotionImage src={simon} alt='Simon Kamau' sx={imageStyles} />
                    <Text fontSize='lg'>
                      Hi, I'm Simon Kamau, a passionate Full Stack Developer with expertise in creating interactive web applications. With a strong background in both front-end and back-end development, I enjoy building solutions that are not only functional but also visually appealing. My journey in software development has equipped me with a diverse set of skills and the ability to adapt to new technologies quickly.
                    </Text>
                  </Flex>
                </CardBody>
              </Card>

              <Card w='100%' boxShadow='lg'>
                <CardHeader>
                  <Heading sx={headingStyles}>Skills</Heading>
                </CardHeader>
                <CardBody>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    {skills.map((skill, index) => (
                      <Flex key={index} p='10px' alignItems='center' gap='1rem'>
                        <Icon color={grey} as={skill.icon} boxSize={6} />
                        <Text>{skill.label}</Text>
                      </Flex>
                    ))}
                  </SimpleGrid>
                </CardBody>
              </Card>

              <Card w='100%' boxShadow='lg'>
                <CardHeader>
                  <Heading sx={headingStyles}>Projects</Heading>
                </CardHeader>
                <CardBody>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    {projects && projects.map((project, index) => (
                      <Box key={index}>
                        <Heading size='md'>{project.title}</Heading>
                      <SimpleGrid columns={{base:1 , md:2}} gap='10px'>
                      <Image src={project.image} alt='project image' sx={imageStyles}/>
                        <Image src={project.image} alt='project image' sx={imageStyles}/>
                      </SimpleGrid>
                        <Text mt={2}>{project.description}</Text>
                        {project.links && (
                          <Flex mt={2} gap='1rem'>
                            <Button bg='blue.400'>
                              <Link to={project.links.github} >GitHub</Link>
                            </Button>
                            <Button bg='orange.400'><Link to={project.links.live} >Visit</Link></Button>
                          </Flex>
                        )}
                      </Box>
                    ))}
                  </SimpleGrid>
                </CardBody>
              </Card>

              <Divider />

              <Card w='100%' boxShadow='lg'>
                <CardHeader>
                  <Heading sx={headingStyles}>Blog Preview</Heading>
                </CardHeader>
                {blogPreviews.map((blog, index) => (
                  <CardBody key={index}>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} gap='10px'>
                      <MotionImage src={blog.image} alt={blog.alt} sx={imageStyles} />
                      <Text fontSize='lg'>{blog.text}</Text>
                    </Flex>
                  </CardBody>
                ))}
              </Card>
            </VStack>
          </TabPanel>
          <TabPanel>
            <Images />
            <Card w='100%' boxShadow='lg'>
              <CardHeader>
                <Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate expedita ipsam cumque, esse fugit assumenda a ullam ut veritatis quod itaque unde ad quo sit magni. Esse consequatur labore repellat?
                </Text>
              </CardHeader>
              <CardBody>
                <MotionImage src={kamau[2]} alt='image 5' sx={imageStyles} />
              </CardBody>
              <CardFooter />
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default About;
