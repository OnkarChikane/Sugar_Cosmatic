import React, { useState } from "react";
import { Box, Divider, Flex, Heading, Input, Button, Text } from "@chakra-ui/react";


const Lets = () => {
  const[btn,setBtn]=useState(false);

  return (
    <Box className="subscribe_box" p={4} textAlign="center">
      <Divider borderColor="gray.200" />
      <Box className="sbc" mt={4}>
        <Flex justify="center" align="center" mb={4}>
          <Divider orientation="horizontal" borderColor="pink.300" w="20px" />
          <Heading size="md" mx={2}>LET’S STAY IN TOUCH</Heading>
          <Divider orientation="horizontal" borderColor="pink.300" w="20px" />
        </Flex>
        <Text className="subs_desc" mb={4}>
          Get the latest beauty tips straight to your inbox. Can’t wait to connect!
        </Text>
        {btn ? (
          "Thanks for subscribing!"
        ):(
          <Flex className="subs_inputBox" justify="center">
          <Input placeholder="Enter your email" type="text" maxW="500px" mr={2} />
          <Button onClick={() => setBtn(true)} colorScheme="pink">SUBSCRIBE</Button>
        </Flex>
        )}
      </Box>
    </Box>
  );
}

export default Lets;
