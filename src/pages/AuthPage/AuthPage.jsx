import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxWidth={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/*left side*/}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/phone.png" h={570} alt="Phone img" />
          </Box>

          {/*right side*/}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />

            <Box textAlign={"center"}>Get app</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/playstore.png" h={"10"} alt="Playstore Logo" />
              <Image src="/microsoft.png" h={"10"} alt="Microsoft Logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
