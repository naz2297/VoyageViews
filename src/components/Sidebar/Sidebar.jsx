import { Box, Flex, Link, Tooltip, Image, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import SidebarItems from "./SidebarItems";
import { InstagramMobileLogo } from "../../assests/constants";

const Sidebar = () => {
  const { handleLogout, isLoggingOut } = useLogout();

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Link
        to={"/"}
        as={RouterLink}
        display={{ base: "none", md: "block" }}
        pl={2}
        cursor={"pointer"}
      >
        <Image src="/logoimg.png" alt="Logo" h={40} />
      </Link>
      <Link
        to={"/"}
        as={RouterLink}
        display={{ base: "block", md: "none" }}
        pl={2}
        mx={1}
        my={3}
        cursor={"pointer"}
        borderRadius={6}
        _hover={{
          bg: "whiteAlpha.200",
        }}
        w={{ base: "block", md: "full" }}
      >
        <InstagramMobileLogo />
      </Link>
      <Flex direction={"column"} gap={5} cursor={"pointer"}>
        <SidebarItems />
      </Flex>

      {/* Logout */}
      <Tooltip
        hasArrow
        label="Logout"
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <Flex
          onClick={handleLogout}
          alignItems={"center"}
          gap={4}
          _hover={{ bd: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          mt={"auto"}
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          <BiLogOut size={25} />
          <Button
            display={{ base: "none", md: "block" }}
            variant={"ghost"}
            _hover={{ bg: "transparent" }}
            isLoading={isLoggingOut}
          >
            Logout
          </Button>
        </Flex>
      </Tooltip>
    </Box>
  );
};

export default Sidebar;

