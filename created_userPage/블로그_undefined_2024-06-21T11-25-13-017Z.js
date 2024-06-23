
import React from 'react';
import { Box, Flex, Heading, Text, Button, Image, HStack, VStack, Stack } from '@chakra-ui/react';
import { FaSearch, FaCommentDots, FaUserEdit } from 'react-icons/fa';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins';
import '@fontsource/raleway';


const theme = extendTheme({
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Raleway, sans-serif',
  },
  colors: {
    primary: '#F6AD55',
    secondary: '#68D391',
    accent: '#F687B3',
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box as="header" bg="primary" py={4} px={8}>
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg" color="white">블로그</Heading>
          <HStack spacing={8}>
            <Text color="white">Home</Text>
            <Text color="white">About</Text>
            <Text color="white">Categories</Text>
            <Text color="white">Contact</Text>
          </HStack>
        </Flex>
      </Box>

      <Box as="section" bg="url('/path/to/hero-image.jpg')" bgSize="cover" bgPos="center" color="white" py={24} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Welcome to Our 블로그</Heading>
        <Text fontSize="xl" mb={8}>Explore the latest in 컴퓨터 and technology</Text>
        <Button size="lg" colorScheme="secondary">Get Started</Button>
      </Box>

      <Box as="section" py={16} px={8} bg="gray.50">
        <Heading as="h3" size="xl" textAlign="center" mb={12}>Key Features</Heading>
        <Flex justify="space-around" wrap="wrap">
          <VStack spacing={4} maxW="300px" textAlign="center">
            <FaSearch size="3em" color="secondary" />
            <Heading as="h4" size="md">Search and Filter</Heading>
            <Text>Find blog posts by keywords and tags</Text>
          </VStack>
          <VStack spacing={4} maxW="300px" textAlign="center">
            <FaCommentDots size="3em" color="secondary" />
            <Heading as="h4" size="md">Comments</Heading>
            <Text>Engage with the community through comments</Text>
          </VStack>
          <VStack spacing={4} maxW="300px" textAlign="center">
            <FaUserEdit size="3em" color="secondary" />
            <Heading as="h4" size="md">User Management</Heading>
            <Text>Register and manage your account</Text>
          </VStack>
        </Flex>
      </Box>

      <Box as="section" py={16} px={8}>
        <Heading as="h3" size="xl" textAlign="center" mb={12}>Latest Posts</Heading>
        <Stack spacing={8}>
          <Box bg="white" shadow="md" p={6} rounded="md">
            <Image src="/path/to/post-image1.jpg" alt="Post image" mb={4} />
            <Heading as="h4" size="md" mb={2}>Post Title 1</Heading>
            <Text>Post content goes here. This is a placeholder text for the blog post description.</Text>
          </Box>
          <Box bg="white" shadow="md" p={6} rounded="md">
            <Image src="/path/to/post-image2.jpg" alt="Post image" mb={4} />
            <Heading as="h4" size="md" mb={2}>Post Title 2</Heading>
            <Text>Post content goes here. This is a placeholder text for the blog post description.</Text>
          </Box>
        </Stack>
      </Box>

      <Box as="footer" bg="primary" py={8} px={8} textAlign="center" color="white">
        <HStack justify="center" spacing={8} mb={4}>
          <Text>Facebook</Text>
          <Text>Twitter</Text>
          <Text>Instagram</Text>
        </HStack>
        <Text>&copy; 2023 블로그. All rights reserved.</Text>
      </Box>
    </ChakraProvider>
  );
};

export default App;

