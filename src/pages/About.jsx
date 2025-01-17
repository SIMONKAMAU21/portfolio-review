import React from "react";
import Images from "../components/images/Images";
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
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGit,
  FaDocker,
} from "react-icons/fa";
import simon from "../assets/simo.jpg";
import { localImages } from "../utils/imageUtils";

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionText = motion(Text);

const About = () => {
  const { colorMode } = useColorMode();

  const grey = useColorModeValue("blue.400", "orange.400");

  const headingStyles = {
    fontSize: { base: "20px", md: "22px", lg: "24px" },
    textAlign: "center",
    w: "100%",
  };

  const imageStyles = {
    w: { base: "100%", md: "45%" },
    h: "auto",
    objectFit: "cover",
    borderRadius: "md",
    whileHover: { scale: 1.05 },
    transition: { duration: 0.3 },
  };

  const kamau = localImages();

  const skills = [
    { icon: FaJs, label: "JavaScript" },
    { icon: FaNodeJs, label: "Express" },
    { icon: FaReact, label: "React" },
    { icon: FaReact, label: "React Native" },

    { icon: FaHtml5, label: "HTML" },
    { icon: FaCss3Alt, label: "CSS/SCSS" },
    { icon: FaCss3Alt, label: "Chakra UI" },
    { icon: FaGit, label: "Git" },
    { icon: FaDocker, label: "Docker" },
  ];

  const blogPreviews = [
    {
      image: kamau[0],
      alt: "Blog 1",
      text: "Exploring the intricacies of modern web development, I delve into the latest trends and technologies that are shaping the industry. From JavaScript frameworks to the nuances of responsive design, join me as I share insights and experiences from my journey as a developer.",
    },
    {
      image: kamau[1],
      alt: "Blog 2",
      text: "In this post, I discuss the importance of maintaining a healthy work-life balance as a developer. Balancing the demands of coding and personal life can be challenging, but with the right strategies, it's possible to achieve harmony and prevent burnout.",
    },
  ];
  const cardStyle = {
    // border:"1px solid",
    backgroundColor: colorMode === "dark" ? "#2D3748" : "gray.100",
    borderBottom: colorMode === "light"?"green" :"red"
  };
  return (
    <Box h="100vh" w={{ base: "100vw", md: "80vw" }} overflowY="auto">
      <Tabs isFitted variant="enclosed">
        <TabList mt={{ base: "10px" }}>
          <Tab _selected={{ color: "white", bg: "blue.500" }}>About</Tab>
          <Tab _selected={{ color: "white", bg: "blue.500" }}>Images</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <VStack alignItems="center" spacing={6}>
              <SimpleGrid spacing={3} w={"100%"} columns={{ base: 1, md: 2 }}>
                <MotionBox
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0.5 }}
                  transition={{ duration: 2 }}
                >
                  <Card
                    sx={cardStyle}
                    w={{ base: "100%", md: "90%" }}
                    boxShadow="lg"
                  >
                    <CardHeader>
                      <Heading sx={headingStyles}>About Me</Heading>
                    </CardHeader>
                    <CardBody>
                      <Flex
                        flexDirection={{ base: "column", md: "row" }}
                        alignItems="center"
                        gap="10px"
                      >
                        <MotionImage
                          src={kamau[2]}
                          alt="Simon Kamau"
                          sx={imageStyles}
                        />
                        <MotionText
                          initial={{ opacity: 0, x: -20, y: -50 }}
                          animate={{ opacity: 1, x: 10, y: 0.5 }}
                          transition={{ duration: 3 }}
                          fontSize="lg"
                          fontWeight={"bold"}
                        >
                          Hi, I'm Simon Kamau, a passionate Full Stack Developer
                          with expertise in creating interactive web
                          applications. With a strong background in both
                          front-end and back-end development, I enjoy building
                          solutions that are not only functional but also
                          visually appealing. My journey in software development
                          has equipped me with a diverse set of skills and the
                          ability to adapt to new technologies quickly.
                        </MotionText>
                      </Flex>
                    </CardBody>
                  </Card>
                </MotionBox>

                <MotionBox
                  h="100%"
                  initial={{ opacity: 0, y: -60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 4 }}
                >
                  <Card
                    h={"100%"}
                    sx={cardStyle}
                    w={{ base: "100%", md: "90%" }}
                    boxShadow="lg"
                  >
                    <CardHeader>
                      <Heading sx={headingStyles}>Skills</Heading>
                    </CardHeader>
                    <CardBody>
                      <SimpleGrid columns={[1,2]} spacing={10}>
                        {skills.map((skill, index) => (
                          <Flex
                            key={index}
                            p="10px"
                            alignItems="center"
                            gap="1rem"
                          >
                            <Icon color={grey} as={skill.icon} boxSize={6} />
                            <Text>{skill.label}</Text>
                          </Flex>
                        ))}
                      </SimpleGrid>
                    </CardBody>
                  </Card>
                </MotionBox>
              </SimpleGrid>

              <Divider />
              <SimpleGrid spacing={3} w={"100%"} columns={{ base: 1, md: 2 }}>
                {blogPreviews.map((blog, index) => (
                  <Card
                    sx={cardStyle}
                    w={{ base: "100%", md: "90%" }}
                    boxShadow="lg"
                  >
                    <CardHeader>
                      <Heading sx={headingStyles}>Blog Preview</Heading>
                    </CardHeader>

                    <CardBody key={index}>
                      <Flex
                        flexDirection={{ base: "column", md: "row" }}
                        gap="10px"
                      >
                        <MotionImage
                          src={blog.image}
                          alt={blog.alt}
                          sx={imageStyles}
                        />
                        <Text fontSize="lg">{blog.text}</Text>
                      </Flex>
                    </CardBody>
                  </Card>
                ))}
              </SimpleGrid>
            </VStack>
          </TabPanel>
          <TabPanel>
            <Images />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default About;
