import { Stack, Center, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// ICONS
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
// ICONS

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleGoToHome = () => {
    navigate("/");
  };
  return (
    <Center minH="100vh" w="100%" textAlign="center">
      <Stack spacing={10}>
        <Text fontSize={"6xl"} fontWeight={700}>
          404! Page Not Found
        </Text>
        <Text fontSize={"3xl"} color="gray.500">
          Sorry, we couldn't find the page.
        </Text>
        <Center gap={5}>
          <Button
            leftIcon={<ArrowBackIcon />}
            onClick={handleGoBack}
            colorScheme="purple"
            variant="ghost"
          >
            Go Back
          </Button>
          <Button
            leftIcon={<HomeIcon />}
            onClick={handleGoToHome}
            colorScheme="purple"
            variant="solid"
          >
            Go To Home
          </Button>
        </Center>
      </Stack>
    </Center>
  );
};

export default PageNotFound;
