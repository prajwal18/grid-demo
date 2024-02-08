import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Stack, Text } from "@chakra-ui/react";
import AgGridSection from "../components/AgGridSection";
import MainLayout from "../../../components/layout/MainLayout";
import { selectSession } from "../../../store/slice/sessionSlice";

const Homepage = () => {
  const { isLoading, isLoggedIn } = useSelector(selectSession);

  return (
    <MainLayout>
      {isLoading ? (
        <Text color="blue.500">Loading...</Text>
      ) : isLoggedIn ? (
        <Stack spacing={10}>
          <Text fontSize="5xl" fontWeight={500}>
            AG Grid Demo
          </Text>

          <AgGridSection />
        </Stack>
      ) : (
        <Navigate to="/login" />
      )}
    </MainLayout>
  );
};

export default Homepage;
