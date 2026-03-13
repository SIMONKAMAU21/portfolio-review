import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Icon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaCode,
  FaMobileAlt,
  FaPalette,
  FaSearch,
  FaBullhorn,
  FaCloud,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description: "Building responsive and modern web applications.",
    icon: FaCode,
  },
  {
    title: "Mobile Development",
    description: "Creating mobile applications for Android and iOS platforms.",
    icon: FaMobileAlt,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing user-friendly and aesthetically pleasing interfaces.",
    icon: FaPalette,
  },
  {
    title: "SEO Optimization",
    description: "Improving website visibility on search engines.",
    icon: FaSearch,
  },
  {
    title: "Digital Marketing",
    description: "Creating and managing digital marketing campaigns.",
    icon: FaBullhorn,
  },
  {
    title: "Cloud Solutions",
    description: "Providing cloud infrastructure and services.",
    icon: FaCloud,
  },
];

const Service = () => {
  const { colorMode } = useColorMode();
  const cardBg = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("blue.600", "orange.400");
  const isLight = colorMode === "light";

  return (
    <Box
      p="5px"
      fontFamily="'DM Sans', sans-serif"
      // bg={"red"}
      w={{ base: "90vw", md: "50vw" }}
      h={{ base: "calc(100vh - 80px)", md: "calc(100vh - 80px)" }}
      mx="auto"
      overflow={"scroll"}
      sx={{
        scrollbarWidth: "none", // For Firefox
        "&::-webkit-scrollbar": { display: "none" }, // For Chrome, Safari
      }}
    >
      <Heading
        as="h1"
        mb={8}
        textAlign="center"
        color={isLight ? "white" : "orange.400"}
      >
        My Services
      </Heading>
      <SimpleGrid flexWrap={"wrap"} columns={[1, 2, 2]} spacing={6}>
        {services.map((service, index) => (
          <Card key={index} bg={cardBg} boxShadow="md" borderRadius="md">
            <CardHeader display="flex" alignItems="center">
              <Box display="flex" justifyContent="space-between" w="100%">
                <Heading as="h3" size="md" color={textColor}>
                  {service.title}
                </Heading>
                <Icon as={service.icon} boxSize={6} mr={2} color={textColor} />
              </Box>
            </CardHeader>
            <CardBody>
              <Text>{service.description}</Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Service;
