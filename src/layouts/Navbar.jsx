import {
  Text,
  Box,
  HStack,
  IconButton,
  useColorMode,
  useTheme,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, InfoIcon, StarIcon, SettingsIcon, EmailIcon } from "@chakra-ui/icons";
import { FaHome } from "react-icons/fa";
import { useNavigate, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", icon: FaHome },
  { to: "/about", label: "Skills", icon: InfoIcon },
  { to: "/Projects", label: "Projects", icon: StarIcon },
  { to: "/services", label: "Services", icon: SettingsIcon },
  { to: "/contact", label: "Contact", icon: EmailIcon },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();

  const isLight = colorMode === "light";

  const sStyles = {
    color: theme.colors.accent.light,
    fontWeight: "900",
    fontSize: { base: "20px", md: "34px" },
  };

  const textStyles = {
    color: "white",
    fontWeight: "600",
    letterSpacing: "2px",
    fontSize: { base: "10px", md: "18px" },
  };

  return (
    <Box
      bg={isLight ? theme.colors.primary.light : theme.colors.primary.dark}
      p="10px 20px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      top={0}
      boxShadow={{ base: "0px 4px 6px rgba(0, 0, 0, 0.5)", md: "none" }}
      width="100vw"
      zIndex="1000"
    >
      {/* Logo */}
      <Box
        display="flex"
        alignItems="center"
        onClick={() => navigate("/")}
        cursor="pointer"
        sx={textStyles}
        flex={{ base: 1, md: "none" }}
      >
        <Text sx={sStyles}>S</Text>
        <Text sx={sStyles}>K</Text>
        <Text>amau</Text>
      </Box>

      {/* Nav Links — desktop: label + icon, mobile: icon only */}
      <HStack
        as="nav"
        spacing={{ base: 1, md: 4 }}
        flex={1}
        justifyContent="center"
      >
        {navItems.map(({ to, label, icon: Icon }) => (
          <Tooltip key={to} label={label} hasArrow display={{ base: "block", md: "none" }}>
            <Link
              as={NavLink}
              to={to}
              display="flex"
              alignItems="center"
              gap="6px"
              px={{ base: "8px", md: "10px" }}
              py="6px"
              borderRadius="md"
              color="white"
              fontWeight="600"
              fontSize={{ base: "11px", md: "14px" }}
              letterSpacing="0.5px"
              opacity={0.8}
              _hover={{ opacity: 1, bg: "whiteAlpha.200", textDecoration: "none" }}
              _activeLink={{ opacity: 1, borderBottom: "2px solid", borderColor: 'white' }}
            >
              <Box as={Icon} boxSize={{ base: "14px", md: "0" }} />
              {/* Label hidden on mobile */}
              <Text display={{ base: "none", md: "inline" }}>{label}</Text>
            </Link>
          </Tooltip>
        ))}
      </HStack>

      {/* Theme toggle */}
      <IconButton
        aria-label="Toggle color mode"
        icon={isLight ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        w={{ base: "30px", md: "40px" }}
        h={{ base: "30px", md: "40px" }}
        bg="none"
        color="white"
        _hover={{ bg: "whiteAlpha.200" }}
      />
    </Box>
  );
};

export default Navbar;