import { Box, Flex,Spinner } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth } from '../../Firebase/Firebase';
import Navbar from "../../components/Navbar/Navbar";

const PageLayouts = ({ children }) => {
  const { pathname } = useLocation();

  const [user,loading]=useAuthState(auth);
  const canRenderSidebar=pathname!=="/auth" && user;
  const canRenderNavbar=!user && !loading && pathname!=='/auth';
  const checkingUserIsAuth=!user && loading;
  if(checkingUserIsAuth) return <PageLayoutsSpinner/>;
  return (
    <Flex flexDir={canRenderNavbar ? "column" :"row"}>
      {/*slide bar on left*/}
      {canRenderSidebar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {/*navbar*/}
      {canRenderNavbar ? <Navbar/> :null}
      {/*page content on right */}
      <Box flex={1} w={{ base: "calc(100%-70px)", md: "calc(100%-240px)" }} mx={"auto"}>
        {children}
      </Box>
    </Flex>
  );
};
export default PageLayouts;
const PageLayoutsSpinner = () => {
	return (
		<Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
			<Spinner size='xl' />
		</Flex>
	);
};