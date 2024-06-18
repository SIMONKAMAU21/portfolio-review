import React from 'react';
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
  HStack
} from '@chakra-ui/react';
import { FaCode, FaMobileAlt, FaPalette, FaSearch, FaBullhorn, FaCloud } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and modern web applications.',
    icon: FaCode
  },
  {
    title: 'Mobile Development',
    description: 'Creating mobile applications for Android and iOS platforms.',
    icon: FaMobileAlt
  },
  {
    title: 'UI/UX Design',
    description: 'Designing user-friendly and aesthetically pleasing interfaces.',
    icon: FaPalette
  },
  {
    title: 'SEO Optimization',
    description: 'Improving website visibility on search engines.',
    icon: FaSearch
  },
  {
    title: 'Digital Marketing',
    description: 'Creating and managing digital marketing campaigns.',
    icon: FaBullhorn
  },
  {
    title: 'Cloud Solutions',
    description: 'Providing cloud infrastructure and services.',
    icon: FaCloud
  }
];

const Service = () => {
  const { colorMode } = useColorMode();
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('blue.600', 'orange.400');

  return (
    <Box p='5px' w={{ base: '90vw', md: '90vw', lg: '75vw' }} mx="auto">
      <Heading as="h1" mb={8} textAlign="center" color={textColor}>
        My Services
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {services.map((service, index) => (
          <Card key={index} bg={cardBg} boxShadow="md" borderRadius="md">
            <CardHeader display="flex" alignItems="center">
            <Box display='flex' justifyContent='space-between' w='100%' >
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
