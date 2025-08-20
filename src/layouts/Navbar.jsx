import {
  Text,
  Box,
  Button,
  Avatar,
  HStack,
  AvatarBadge,
  IconButton,
  useColorMode,
  useTheme,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import simon from "../assets/simo.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();

  const textStyles = {
    color: "white",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    letterSpacing: "2px",
    flex: "1",
    fontSize: {
      base: "10px",
      md: "18px",
    },
  };

  const sStyles = {
    color: theme.colors.accent.light,
    fontWeight: "900",
    fontSize: {
      base: "20px",
      md: "34px",
    },
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Box
      bg={
        colorMode === "light"
          ? theme.colors.primary.light
          : theme.colors.primary.dark
      }
      p="10px"
      display="flex"
      justifyContent="space-between"
      position="fixed"
      top={0}
      boxShadow={{ base: "0px 4px 6px rgba(0, 0, 0, 0.5)", md: "none" }}
      width={{ base: "100vw", md: "100vw" }}
      zIndex="1000"
      // border="1px solid"
    >
      <Box flex={3} sx={textStyles} onClick={handleLogout}>
        <Text sx={sStyles}>S</Text>
        <Text sx={sStyles}>K</Text>
        <Text>amau</Text>
      </Box>
      <HStack
        align={"center"}
        alignSelf={"end"}
      //   flex={1}
      w={{ base: "100px", md: "200px" }}
      justifyContent={{base:"space-between", md:"space-around"}}
        display="flex"
        alignItems={"end"}
        spacing={2}
      //   border="1px solid"
      >
        <Avatar
         //  border="1px solid"
          name="simon kamau gatuma"
          w={{ base: "30px", md: "40px" }}
          h={{ base: "30px", md: "40px" }}
          src={simon}
          objectFit="cover"
          bg={theme.colors.accent.light}
        >
          {/* <AvatarBadge bg='teal' boxSize={{base:"30px", md:'1.2em'}} /> */}
        </Avatar>
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
            w={{ base: "30px", md: "40px" }}
          h={{ base: "30px", md: "40px" }}
          bg={"none"}
          color={textStyles.color}
        />
      </HStack>
    </Box>
  );
};

export default Navbar;
