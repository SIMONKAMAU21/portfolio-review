import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Stack,
  HStack,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import { localImages } from "../utils/imageUtils";
import { useMemo } from "react";

const Projects = () => {
  const images = useMemo(() => localImages(), []);

  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const primary = useColorModeValue("#172876", "orange.400");

  const projects = [
    {
      title: "Simo Care",
      description:
        "Patient management platform for handling appointments, patient records, and healthcare workflows.",
      tech: ["React", "Node.js", "Chakra UI", "Cloudinary"],
      image: images[8],
      github: "https://github.com/SIMONKAMAU21/carepulse.git",
      live: "https://simocare.vercel.app/",
    },
    {
      title: "KCB Portal",
      description:
        "A modern banking dashboard UI with authentication, analytics, and responsive design.",
      tech: ["React", "Chakra UI", "API Integration"],
      image: images[5],
      github: "https://github.com/SIMONKAMAU21/KCB-portal.gi",
      live: "https://kcb-portal.vercel.app/",
    },
    {
      title: "Click to Chat",
      description:
        "Tool that allows users to start WhatsApp conversations without saving phone numbers.",
      tech: ["React", "WhatsApp API"],
      image: images[4],
      github: "https://github.com/SIMONKAMAU21/click-to-chat.git",
      live: "https://click-to-chat.vercel.app/",
    },
    {
      title: "Kentech Solutions",
      description:
        "Design services platform helping brands create logos and marketing assets.",
      tech: ["React", "Chakra UI"],
      image: images[11],
      live: "https://kentech-web-v1.vercel.app/",
    },
  ];

  return (
    <Box
      minH="100vh"
      h="100%"
      fontFamily="'DM Sans', sans-serif"
      sx={{
        scrollbarWidth: "none", // For Firefox
        "&::-webkit-scrollbar": { display: "none" }, // For Chrome, Safari
      }}
      overflow={"scroll"}
      mb={"3%"}
      px={{ base: 6, md: 20 }}
      py={16}
    >
      <Heading color={"white"} textAlign="center" mb={12}>
        Projects
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {projects.map((project, index) => (
          <Card
            key={index}
            bg={cardBg}
            border="1px"
            borderColor={borderColor}
            borderRadius="xl"
            overflow="hidden"
            transition="all .3s"
            _hover={{
              transform: "translateY(-8px)",
              boxShadow: "xl",
            }}
          >
            <Image src={project.image} h="220px" w="100%" objectFit="cover" />

            <CardBody>
              <Stack spacing={4}>
                <Heading size="md">{project.title}</Heading>

                <Text fontSize="sm" color="gray.500">
                  {project.description}
                </Text>

                <HStack flexWrap="wrap">
                  {project.tech.map((tech, i) => (
                    <Tag key={i} colorScheme="blue">
                      {tech}
                    </Tag>
                  ))}
                </HStack>

                <HStack pt={2}>
                  {project.github && (
                    <Button
                      size="sm"
                      as="a"
                      href={project.github}
                      target="_blank"
                      variant="outline"
                    >
                      GitHub
                    </Button>
                  )}

                  {project.live && (
                    <Button
                      size="sm"
                      as="a"
                      href={project.live}
                      target="_blank"
                      bg={primary}
                      color="white"
                      _hover={{ opacity: 0.9 }}
                    >
                      Live Demo
                    </Button>
                  )}
                </HStack>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
