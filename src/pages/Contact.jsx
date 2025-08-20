import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Heading,
  Text,
  useToast,
  HStack,
  IconButton,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaSms, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { colorMode } = useColorMode();

  const toast = useToast();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8vommni",
        "template_9oiz16i",
        e.target,
        "bMgeqI01rOsFNk7YB"
      )
      .then(
        (result) => {
          toast({
            title: "Message Sent.",
            description:
              "We've received your message and will get back to you shortly.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          toast({
            title: "An error occurred.",
            description: "Unable to send message. Please try again later.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <>
      <Box
        sx={{
          scrollbarWidth: "none", // For Firefox
          "&::-webkit-scrollbar": { display: "none" }, // For Chrome, Safari
        }}
         w={{ base: "90vw", md: "50vw" }}
      h={{ base: "calc(90vh - 0px)", md: "calc(80vh - 80px)" }}
        mx="auto"
        p={6}
        mt={4}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        bg={colorMode === "light" ? "white" : "gray.800"}
      >
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Contact Me
        </Heading>
        <Text fontSize="lg" textAlign="center" mb={6}>
          I would love to hear from you! Please fill out the form below to get
          in touch.
        </Text>
        <Box mb="10px" display="flex" justifyContent="center">
          <HStack spacing={4} mt={6} justifyContent="">
            <Link href="https://wa.me/+254759717794" isExternal>
              <IconButton
                icon={<FaWhatsapp />}
                // aria-label='WhatsApp'
                colorScheme="whatsapp"
                size="lg"
              />
            </Link>
            <Link href="https://www.facebook.com/simo kamau" isExternal>
              <IconButton
                icon={<FaFacebook />}
                // aria-label='WhatsApp'
                colorScheme="facebook"
                size="lg"
              />
            </Link>
            <Link href="sms:+254759717794" isExternal>
              <IconButton
                icon={<FaSms />}
                aria-label="SMS"
                colorScheme="teal"
                size="lg"
              />
            </Link>
          </HStack>
        </Box>
        <VStack spacing={4} as="form" onSubmit={handleSubmit}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              name="name"
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
          </FormControl>
          <FormControl id="message" isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              name="message"
            />
          </FormControl>
          <Button borderRadius={"3xl"} bg="orange.400" size="lg" w="50%" type="submit">
            Send
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default Contact;
