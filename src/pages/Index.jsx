import { Container, VStack, Text, Input, Button, Box, Flex } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';

const Index = () => {
  return (
    <Container maxW="container.md" p={5}>
      <Flex direction="column" align="center" mb={5}>
        <FaTwitter size="3em" color="#1DA1F2" />
        <Text fontSize="2xl" fontWeight="bold" mt={3}>Welcome to MiniTwitter</Text>
      </Flex>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        <VStack spacing={4}>
          <Input placeholder="What's happening?" />
          <Button colorScheme="twitter">Tweet</Button>
        </VStack>
      </Box>
      <Box mt={6}>
        <Text fontSize="lg" fontWeight="bold">Recent Tweets</Text>
        <Box mt={2} borderWidth="1px" borderRadius="lg" p={4}>
          <Text>No tweets to show</Text>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;