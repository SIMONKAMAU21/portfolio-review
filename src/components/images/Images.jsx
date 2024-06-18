import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Box, Image, Spinner } from '@chakra-ui/react';
import { localImages } from '../../utils/imageUtils';


const Images = () => {
   const [userData, setUserData] = useState([]);
   const [loading, setLoading] = useState(true);
 
   useEffect(() => {
     const fetchImages = async () => {
       try {
         const responses = await Promise.all([
           axios.get('https://picsum.photos/200/300?random=1'),
           axios.get('https://picsum.photos/200/300?random=2'),
           axios.get('https://picsum.photos/200/300?random=3'),
           axios.get('https://picsum.photos/200/300?random=4'),
           axios.get('https://picsum.photos/200/300?random=5')
         ]);
         setUserData(responses.map(response => response.request.responseURL));
       } catch (error) {
         console.log('error', error);
       } finally {
         setLoading(false);
       }
     };
     fetchImages();
   }, []);
const simon =localImages()
  
  return (
    <Box >
         <Box display='flex'  boxSize='md' p='10px' gap='10px' mt='10px'  overflow='auto' w='99%' justifyContent='space-around' boxShadow='5px 0px 5px 0px rgba(0,0,0,0.25)'>
         {loading ? (
          <Spinner size='xl' thickness='4px' color='blue.500' emptyColor='gray.200'/>
        ) : (
          <>
            {simon.map((src, index) => (
              <Image key={`local-${index}`} src={src} alt={`Local ${index}`} boxSize='400px' objectFit='cover' borderRadius='md' />
            ))}
            {userData.map((url, index) => (
              <Image key={`api-${index}`} src={url} alt={`Random ${index}`} boxSize='400px' objectFit='cover' borderRadius='md' />
            ))}
          </>
        )}
      </Box>
    </Box>
  )
}

export default Images