import { Container, Text, VStack, Box, Heading, Button, Flex, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FaCode, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";
import CodeEditor from '../components/CodeEditor';

const Index = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [code, setCode] = useState('// Write your code here');

  const handleEnroll = (course) => {
    setEnrolledCourses([...enrolledCourses, course]);
  };

  const handleCodeChange = (newValue) => {
    setCode(newValue);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to CodeMaster</Heading>
        <Text fontSize="lg" textAlign="center">Your ultimate platform to learn coding online. Start your journey with us!</Text>
        
        <Flex justifyContent="center" wrap="wrap" spacing={4}>
          <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md" m={2}>
            <IconButton aria-label="Learn HTML" icon={<FaCode />} size="lg" isRound />
            <Heading as="h3" size="md" mt={4}>Learn HTML</Heading>
            <Text mt={2}>Start with the basics of web development.</Text>
            <Button mt={4} colorScheme="teal" onClick={() => handleEnroll('HTML')}>Start Learning</Button>
          </Box>
          
          <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md" m={2}>
            <IconButton aria-label="Learn CSS" icon={<FaLaptopCode />} size="lg" isRound />
            <Heading as="h3" size="md" mt={4}>Learn CSS</Heading>
            <Text mt={2}>Style your websites with ease.</Text>
            <Button mt={4} colorScheme="teal" onClick={() => handleEnroll('CSS')}>Start Learning</Button>
          </Box>
          
          <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md" m={2}>
            <IconButton aria-label="Learn JavaScript" icon={<FaChalkboardTeacher />} size="lg" isRound />
            <Heading as="h3" size="md" mt={4}>Learn JavaScript</Heading>
            <Text mt={2}>Make your websites interactive.</Text>
            <Button mt={4} colorScheme="teal" onClick={() => handleEnroll('JavaScript')}>Start Learning</Button>
          </Box>
        </Flex>
        
        <Box mt={8}>
          <Heading as="h2" size="lg">Enrolled Courses</Heading>
          <VStack spacing={2} mt={4}>
            {enrolledCourses.map((course, index) => (
              <Text key={index}>{course}</Text>
            ))}
          </VStack>
        </Box>

        <Box mt={8} width="100%">
          <Heading as="h2" size="lg" mb={4}>Code Editor</Heading>
          <CodeEditor language="javascript" value={code} onChange={handleCodeChange} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;