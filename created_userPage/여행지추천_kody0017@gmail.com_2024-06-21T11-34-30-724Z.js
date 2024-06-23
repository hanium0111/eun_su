
import React from 'react';
import {

  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Link,
  IconButton,
  VStack,
  HStack,
  SimpleGrid,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <Box>
      {/* Header */}
      <Flex
        as="header"
        bg="white"
        p={4}
        borderBottom="1px"
        borderColor="gray.200"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Image src="/logo.png" alt="Logo" boxSize="50px" />
        </Box>
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">여행지추천</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact Us</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box
        as="section"
        bgImage="url('/hero.jpg')"
        bgSize="cover"
        bgPosition="center"
        color="white"
        textAlign="center"
        py={20}
      >
        <VStack spacing={4}>
          <Heading fontSize="4xl">Happy Travel</Heading>
          <Text fontSize="lg">Bright landscapes and cheerful scenery await you.</Text>
          <Button colorScheme="teal" size="lg">
            Get Started
          </Button>
        </VStack>
      </Box>

      {/* Features Section */}
      <Box as="section" py={20} bg="gray.50">
        <Heading textAlign="center" mb={12} fontSize="3xl">
          Key Features
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10} px={10}>
          <Box textAlign="center">
            <Image src="/feature1.jpg" alt="Feature 1" boxSize="150px" mx="auto" mb={4} />
            <Heading fontSize="xl">Feature 1</Heading>
            <Text>Brief description of Feature 1.</Text>
          </Box>
          <Box textAlign="center">
            <Image src="/feature2.jpg" alt="Feature 2" boxSize="150px" mx="auto" mb={4} />
            <Heading fontSize="xl">Feature 2</Heading>
            <Text>Brief description of Feature 2.</Text>
          </Box>
          <Box textAlign="center">
            <Image src="/feature3.jpg" alt="Feature 3" boxSize="150px" mx="auto" mb={4} />
            <Heading fontSize="xl">Feature 3</Heading>
            <Text>Brief description of Feature 3.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Content Section */}
      <Box as="section" py={20}>
        <Heading textAlign="center" mb={12} fontSize="3xl">
          Explore Destinations
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10} px={10}>
          <Box textAlign="center">
            <Image src="/destination1.jpg" alt="Destination 1" boxSize="200px" mx="auto" mb={4} />
            <Heading fontSize="xl">Destination 1</Heading>
            <Text>Brief description of Destination 1.</Text>
          </Box>
          <Box textAlign="center">
            <Image src="/destination2.jpg" alt="Destination 2" boxSize="200px" mx="auto" mb={4} />
            <Heading fontSize="xl">Destination 2</Heading>
            <Text>Brief description of Destination 2.</Text>
          </Box>
          <Box textAlign="center">
            <Image src="/destination3.jpg" alt="Destination 3" boxSize="200px" mx="auto" mb={4} />
            <Heading fontSize="xl">Destination 3</Heading>
            <Text>Brief description of Destination 3.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={10}>
        <Flex direction="column" alignItems="center">
          <HStack spacing={4} mb={4}>
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebook />}
              colorScheme="facebook"
              variant="outline"
            />
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter />}
              colorScheme="twitter"
              variant="outline"
            />
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram />}
              colorScheme="pink"
              variant="outline"
            />
          </HStack>
          <Text>Contact us: email@example.com | +123 456 7890</Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default App;

