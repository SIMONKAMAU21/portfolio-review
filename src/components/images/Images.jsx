import  {  useState } from "react";
import {
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { localImages } from "../../utils/imageUtils";

const Images = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (src) => {
    setSelectedImage(src);
    onOpen();
  };

  const simon = localImages();

  return (
    <Box>
      <Box
        display="flex"
        boxSize="md"
        p="10px"
        gap="10px"
        mt="10px"
        overflow="auto"
        w="99%"
        h="100%"
        flexWrap="wrap"
        justifyContent="space-around"
        // boxShadow="5px 0px 5px 0px rgba(0,0,0,0.25)"
      >
        <>
          {simon.map((src, index) => (
            <Image
              key={`local-${index}`}
              src={src}
              alt={`Local ${index}`}
              boxSize="400px"
              objectFit="cover"
              borderRadius="md"
              onClick={() => handleClick(src)}
              cursor="pointer"
            />
          ))}
        </>
      </Box>

      <Modal justifyContent='center' bg='red.500' isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay bg="blackAlpha.700" display={'flex'} alignItems={'center'} />
        <ModalContent
          position="absolute"
          bottom={{ base: "10" }}
          m="auto"
          borderTopRadius="xl"
          maxW={{ base: "80%", md: "50%" }}
          h={{ base: "60%", md: "70%" }}
        >
          <ModalBody
            p={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {selectedImage && (
              <Image h={{ base: "100%" }} src={selectedImage} alt="Selected" objectFit={'cover'}  />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Images;
