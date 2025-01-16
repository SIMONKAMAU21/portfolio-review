import { Text, Box, Button, Avatar, HStack, AvatarBadge, IconButton, useColorMode, useTheme } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import simon from '../assets/simo.jpg'

const Navbar = () => {
   const navigate = useNavigate()
   const { colorMode, toggleColorMode } = useColorMode()
   const theme = useTheme()

   const textStyles = {
      color: "white",
      fontWeight: "600",
      display: 'flex',
      alignItems: 'center',
      letterSpacing: '2px',
      flex: '1',
      fontSize:{
         base:'10px',
         md:'18px'
      },
    
   }
   
   const sStyles = {
      color: theme.colors.accent.light,
      fontWeight: '900',
      fontSize: {
         base:"20px",
         md:"34px"
      }
   }

   const handleLogout = () => {
      navigate('/')
   }

   return (
      <Box
         bg={colorMode === 'light' ? theme.colors.primary.light : theme.colors.primary.dark}
         p='10px'
         display='flex'
         justifyContent='space-between'
         position='fixed'
         top={0}
         boxShadow={{ base: '0px 4px 6px rgba(0, 0, 0, 0.5)', md: 'none' }}
         width='100%'
         zIndex='1000'
      >
         <Box sx={textStyles} onClick={handleLogout}>
            <Text sx={sStyles}>S</Text>
            <Text sx={sStyles}>K</Text>
            <Text>amau</Text>
         </Box>
         <HStack>
            <Avatar name='simon kamau gatuma' src={simon} objectFit='cover' bg={theme.colors.accent.light}>
               <AvatarBadge bg='teal' boxSize={{base:"30px", md:'1.2em'}} />
            </Avatar>
            <IconButton
               aria-label='Toggle color mode'
               icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
               onClick={toggleColorMode}
               w={{base:'40px'}}
               h={{base:"40px"}}
               bg={"none"}
               color={textStyles.color}
            />
         </HStack>
      </Box>
   )
}

export default Navbar
