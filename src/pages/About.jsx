import Images from "../components/images/Images";
import {
  Box,
  Card,
  CardBody,
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
  SimpleGrid,
  Icon,
  useColorModeValue,
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
import { localImages } from "../utils/imageUtils";
import { useMemo } from "react";

const MotionBox = motion.create(Box);
const MotionImage = motion(Image);
// const MotionText = motion.create(Text);

const About = () => {
  // useGSAP(() => {
  //   gsap.from("#skills,#about-card", {
  //     y: -0,
  //     yoyo: true,
  //     width: 10,
  //     height: 50,
  //     rotate: 360,
  //     // repeat:-1,
  //     duration: 3,
  //     ease: "power1.inOut",
  //   });
  //   gsap.from("#skill-item", {
  //     x: 250,
  //     duration: 4,
  //     yoyo: true,
  //     // repeat:-1,
  //     rotate: 240,
  //     ease: "bounce",
  //   });
  //   gsap.from("#skill-text", {
  //     y: 250,
  //     duration: 5,
  //     width: 0,
  //     height: 0,
  //     yoyo: true,
  //     // repeat:-1,
  //     rotate: 360,
  //     ease: "circ.inOut",
  //   });
  // }, []);

  const grey = useColorModeValue("blue.400", "orange.400");

  const headingStyles = {
    fontSize: { base: "20px", md: "22px", lg: "24px" },
    textAlign: "center",
    w: "100%",
  };

  const imageStyles = {
    w: { base: "100%", md: "50%" },
    h: { base: "50%", md: "35%" },
    objectFit: "cover",
    borderRadius: "xl",
    whileHover: { scale: 1.05 },
    transition: { duration: 0.3 },
  };

  const kamau = useMemo(()=>  localImages() ,[] ) ;

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
    // {
    //   image: kamau[1],
    //   alt: "Blog 2",
    //   text: "In this post, I discuss the importance of maintaining a healthy work-life balance as a developer. Balancing the demands of coding and personal life can be challenging, but with the right strategies, it's possible to achieve harmony and prevent burnout.",
    // },
    // {
    //   image: kamau[10],
    //   alt: "Blog 2",
    //   text: "In this post, I discuss the importance of maintaining a healthy work-life balance as a developer. Balancing the demands of coding and personal life can be challenging, but with the right strategies, it's possible to achieve harmony and prevent burnout.",
    // },
  ];
  const cardStyle = {
    // border:"1px solid",
    // backgroundColor: colorMode === "dark" ? "#2D3748" : "gray.100",
    // borderBottom: colorMode === "light" ? "green" : "white",
  };
  return (
    <Box
      sx={{
        scrollbarWidth: "none", // For Firefox
        "&::-webkit-scrollbar": { display: "none" }, // For Chrome, Safari
      }}
      minH="100vh"
     
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      px={{ base: "", md: "10%" }}
    py={{base:'10%',md:'0%'}}
      fontFamily="'DM Sans', sans-serif"
    >
      <Tabs mt=" " w="full" isFitted variant={'line'}>
        <TabList mt={{ base: "10px" }}>
          <Tab _selected={{ color: "white" }} color={'gray.400'}>About</Tab>
          <Tab _selected={{ color: "white", }} color={'gray.400'}>Images</Tab>
        </TabList>

        <TabPanels
          overflow={"scroll"}
          h={"90vh"}
          pb='6'
          sx={{
            scrollbarWidth: "none", // For Firefox
            "&::-webkit-scrollbar": { display: "none" }, // For Chrome, Safari
          }}
        >
          <TabPanel>
            <VStack
              position={"relative"}
              // overflow={"scroll"}
              p="3"
              // display="flex"
              // alignItems="center"
              // justifyContent="center"
              // bg={'red.800'}
              w="100%"
              spacing={6}
              sx={{
                scrollbarWidth: "none", // For Firefox
                "&::-webkit-scrollbar": { display: "none" }, // For Chrome, Safari
              }}
            >
              <SimpleGrid
                spacing={3}
                gap={2}
                border={2}
                // w={"100%"}
                columns={{ base: 1, md: 1,lg:2 }}
              >
                <Box
                  h="100%"
                  id="skills"
                  initial={{ opacity: 0, y: -60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 4 }}
                >
                  <Card h={"100%"} w={{ base: "100%", md: "90%" }}>
                    <CardHeader>
                      <Heading sx={headingStyles}>Skills</Heading>
                    </CardHeader>
                    <CardBody>
                      <SimpleGrid columns={[1, 2]} spacing={10}>
                        {skills.map((skill, index) => (
                          <Flex
                            key={index}
                            id="skill-item"
                            p="10px"
                            alignItems="center"
                            gap="1rem"
                          >
                            <Icon
                              id="skill-text"
                              color={grey}
                              as={skill.icon}
                              boxSize={6}
                            />
                            <Text>{skill.label}</Text>
                          </Flex>
                        ))}
                      </SimpleGrid>
                    </CardBody>
                  </Card>
                </Box>
                <MotionBox
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0.5 }}
                  transition={{ duration: 2 }}
                >
                  <Card
                    id="about-card"
                    sx={cardStyle}
                    // w={{ base: "100vw", md: "95%" }}
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
                          id="about-image"
                          src={kamau[2]}
                          alt="Simon Kamau"
                          sx={imageStyles}
                        />
                        <Box
                          id="about-text"
                          initial={{ opacity: 0, x: -20, y: -50 }}
                          animate={{ opacity: 1, x: 10, y: 0.5 }}
                          transition={{ duration: 3 }}
                          fontSize="md"
                          w={{ base: "90%" }}
                        >
                          <Text>
                            Hi, I'm Simon Kamau, a passionate Full Stack
                            Developer with expertise in creating interactive web
                            applications. With a strong background in both
                            front-end and back-end development, I enjoy building
                            solutions that are not only functional but also
                            visually appealing. My journey in software
                            development has equipped me with a diverse set of
                            skills and the ability to adapt to new technologies
                            quickly.
                          </Text>
                        </Box>
                      </Flex>
                    </CardBody>
                  </Card>
                </MotionBox>
              </SimpleGrid>

              {/* <Divider /> */}
              <SimpleGrid spacing={3} w={"100%"} columns={{ base: 1, md: 1,lg:2 }}>
                {blogPreviews.map((blog, index) => (
                  <Card
                  key={index}
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
                        spacing='2'
                      >
                        <MotionImage
                          src={blog.image}
                          alt={blog.alt}
                          sx={imageStyles}
                        />
                        <Text alignItems={'center'} fontSize="md">{blog.text}</Text>
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
