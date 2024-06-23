


jsx
import React from 'react';
import { Box, Button, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import { FaRoute, FaUtensils, FaUser } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
});

function TravelRecommendationHomePage() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="white" color="gray.700" minH="100vh">
        <header>
          <Flex as="nav" align="center" justify="space-between" padding="1.5rem" bg="white" boxShadow="sm">
            <Heading as="h1" size="lg" color="teal.500">여행추천홈페이지</Heading>
            <Flex gap="1rem">
              <Link href="#" color="teal.500" fontWeight="bold">Home</Link>
              <Link href="#" color="teal.500" fontWeight="bold">Route</Link>
              <Link href="#" color="teal.500" fontWeight="bold">Dining</Link>
              <Link href="#" color="teal.500" fontWeight="bold">Login</Link>
            </Flex>
          </Flex>
        </header>

        <Box as="section" position="relative" textAlign="center" color="white">
          <Image src="https://source.unsplash.com/random/1920x1080?travel" alt="Hero Image" objectFit="cover" w="100%" h="400px" />
          <Flex direction="column" align="center" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
            <Heading as="h2" size="2xl" mb="4">Discover Your Perfect Trip</Heading>
            <Button colorScheme="teal" size="lg">Get Started</Button>
          </Flex>
        </Box>

        <Box as="section" py="10" bg="gray.50">
          <Flex direction="row" justify="space-around" flexWrap="wrap">
            <Box textAlign="center" p="4" maxW="sm">
              <FaRoute size="3rem" color="teal.500" />
              <Heading as="h3" size="lg" mt="4">경로추천</Heading>
              <Text mt="2">Personalized route recommendations based on your preferences.</Text>
            </Box>
            <Box textAlign="center" p="4" maxW="sm">
              <FaUtensils size="3rem" color="teal.500" />
              <Heading as="h3" size="lg" mt="4">맛집추천</Heading>
              <Text mt="2">Find the best dining spots tailored to your taste.</Text>
            </Box>
            <Box textAlign="center" p="4" maxW="sm">
              <FaUser size="3rem" color="teal.500" />
              <Heading as="h3" size="lg" mt="4">User Reviews</Heading>
              <Text mt="2">Read reviews and ratings from fellow travelers.</Text>
            </Box>
          </Flex>
        </Box>

        <Box as="section" py="10">
          <Flex direction="column" align="center">
            <Heading as="h3" size="xl" mb="6">Explore Our Features</Heading>
            <Box maxW="3xl" textAlign="center">
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
              </Text>
              <Image src="https://source.unsplash.com/random/800x600?scenic" alt="Scenic Image" objectFit="cover" mt="6" />
            </Box>
          </Flex>
        </Box>

        <Box as="footer" bg="gray.800" color="white" py="6" textAlign="center">
          <Flex justify="center" mb="4">
            <Link href="#" mx="2"><FaRoute size="1.5rem" /></Link>
            <Link href="#" mx="2"><FaUtensils size="1.5rem" /></Link>
            <Link href="#" mx="2"><AiFillStar size="1.5rem" /></Link>
          </Flex>
          <Text>&copy; 2023 여행추천홈페이지. All rights reserved.</Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default TravelRecommendationHomePage;

