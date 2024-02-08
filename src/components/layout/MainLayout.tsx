import { Container } from "@chakra-ui/react";
import { FC } from "react";

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <Container maxW="full" minH="100vh">
      {children}
    </Container>
  );
};

export default MainLayout;
