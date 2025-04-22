import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Image,
  Spinner,
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
        justifyContent="space-around"
        boxShadow="5px 0px 5px 0px rgba(0,0,0,0.25)"
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

      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay bg="blackAlpha.700" />
        <ModalContent
          position="absolute"
          bottom={{ base: "0" }}
          // left={{ base: "0", md: "70%" }}
          // right="0"
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
              <Image h={{ base: "100%" }} src={selectedImage} alt="Selected" />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Images;
