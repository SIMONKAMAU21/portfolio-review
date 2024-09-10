// src/components/ThreeDHome.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Image, Plane } from '@react-three/drei';
import { Box } from '@chakra-ui/react';

const RotatingGroup = ({ children }) => {
  const ref = useRef();
  
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });
  
  return <group ref={ref}>{children}</group>;
};

const ThreeDHome = () => {
  return (
    <Box width="100%" height="100vh" position="relative">
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{ position: [0, 0, 10], fov: 75 }}
      >
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <RotatingGroup>
          {/* Background */}
          <Plane args={[20, 20]} position={[0, 0, -10]} rotation={[-Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color="#333" />
          </Plane>
          
          {/* Simon Kamau Text */}
          <Text
            position={[0, 1, 0]}
            fontSize={1}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Simon Kamau
          </Text>
          
          {/* Profile Image */}
          <Image url="/path/to/your/image.jpg" scale={[2, 2, 1]} position={[0, 0, 0]} />
          
          {/* Description */}
          <Text
            position={[0, -2, 0]}
            fontSize={0.5}
            color="white"
            anchorX="center"
            anchorY="middle"
            maxWidth={5}
          >
            Full Stack Developer passionate about creating interactive applications and experiences on the web.
          </Text>
          
          {/* Contact and CV buttons */}
          <group position={[0, -4, 0]}>
            <Text
              position={[-1, 0, 0]}
              fontSize={0.3}
              color="cyan"
              anchorX="center"
              anchorY="middle"
              onClick={() => window.open('/contact', '_self')}
            >
              Contact
            </Text>
            <Text
              position={[1, 0, 0]}
              fontSize={0.3}
              color="cyan"
              anchorX="center"
              anchorY="middle"
              onClick={() => window.open('https://drive.google.com/file/d/1ECkv6VOwyWoHjGakvhHcyGfJ9vtO-zYP/view?usp=drive_link', '_blank')}
            >
              Download CV
            </Text>
          </group>
        </RotatingGroup>
      </Canvas>
    </Box>
  );
};

export default ThreeDHome;
