import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { localImages } from "../utils/imageUtils";

const Projects = () => {
  const kamau = localImages();
  const primaryColor = useColorModeValue("blue.400", "orange.400");
  const secondaryColor = useColorModeValue("orange.400", "blue.400");

  const headingStyles = {
    fontSize: { base: "24px", md: "28px", lg: "32px" },
    textAlign: "center",
    w: "100%",
    mb: 6,
  };

  const cardStyles = {
    boxShadow: "lg",
    p: { base: 1, md: 6 },
    bg: useColorModeValue("gray.50", "gray.800"),
    borderRadius: "md",
  };

  const imageStyles = {
    // w: '90%',
    // h: '350px',
    objectFit: "cover",
    borderRadius: "md",
    _hover: { transform: "scale(1.40)", transition: "transform 0.3s ease" },
  };

  const buttonStyles = {
    bg: primaryColor,
    color: "white",
    _hover: { bg: secondaryColor },
  };

  const projects = [
    {
      title: "simo care",
      description: `Simo Care is a patient management platform designed to streamline healthcare operations and improve patient care. The platform provides an efficient way for healthcare providers to manage patient records, appointments, and essential medical information, all through a user-friendly interface.

      Key Features:
      - Patient Records Management: View, update, and track detailed patient information, including medical history, insurance details, allergies, and emergency contacts.
      - Appointment Scheduling: Easily schedule, manage, and cancel patient appointments, with real-time updates on appointment statuses (pending, canceled, scheduled).
      - Responsive UI: Utilizes Chakra UI for a clean, responsive design that adapts to any screen size, ensuring ease of use for both staff and patients.
      - Role-based Access: Provides different layouts and dashboards for healthcare providers based on their roles, such as doctors, nurses, and administrators, ensuring data security and role-appropriate access.
      - Secure Data Handling: The platform ensures secure patient data management with encrypted storage and robust permission systems.
      - Cloud Integration: Integrates with services like Cloudinary for handling media uploads such as patient identification documents, enabling a seamless flow of data into the platform.
      - Pagination and Search: Efficiently handle large datasets by allowing staff to navigate patient records with pagination and search functionalities.
      - Real-time Updates: Ensures that data is up-to-date across all users, reducing errors in patient care and administrative tasks.`,

      image: kamau[8],
      links: {
        github: "https://github.com/SIMONKAMAU21/carepulse.git",
        live: "https://simocare.vercel.app/",
      },
    },
    {
      title: "Kcb portal",
      description:
        "A brief description of the project. Highlight key features, technologies used, and the impact it had.",
      image: kamau[5],
      links: {
        github: "https://github.com/SIMONKAMAU21/KCB-portal.gi",
        live: "https://kcb-portal.vercel.app/",
      },
    },
    {
      title: "click to chat",
      description:
        "Click to Chat is a convenient tool that allows you to initiate a WhatsApp chat with any phone number without having to save the contact in your phone. This app aims to simplify the process of connecting with people on WhatsApp, especially for one-time conversations.",
      image: kamau[4],
      links: {
        github: "https://github.com/SIMONKAMAU21/click-to-chat.git",
        live: "https://click-to-chat.vercel.app/",
      },
    },
   
  ];
  const bgGradient = useColorModeValue(
    "linear(to-r, blue.900, orange.700)",
    "linear(to-r, orange.400, blue.400)"
  );

  return (
    <>
      <Card sx={cardStyles}>
        <CardHeader>
          <Heading sx={headingStyles} bgGradient={bgGradient} bgClip="text">
            Projects
          </Heading>
        </CardHeader>
        <CardBody>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {projects &&
              projects.map((project, index) => (
                <Box
                  key={index}
                  w={{ base: "100%" }}
                  p={{ base: "10px" }}
                  borderWidth="1px"
                  borderRadius="md"
                >
                  <Heading size="md" mb={4}>
                    {project.title}
                  </Heading>
                  <Image
                    src={project.image}
                    alt="project image"
                    sx={imageStyles}
                  />
                  <Text mt={4}>{project.description}</Text>
                  {project.links && (
                    <Flex mt={4} gap={4}>
                      <Button
                        as="a"
                        href={project.links.github}
                        sx={buttonStyles}
                      >
                        GitHub
                      </Button>
                      <Button
                        as="a"
                        href={project.links.live}
                        sx={buttonStyles}
                      >
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
};

export default Projects;
