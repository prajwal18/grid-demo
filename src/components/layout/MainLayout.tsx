import { Container } from "@chakra-ui/react";
import { FC } from "react";

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <Container maxW="full">
      <Container maxW="container.xl" minH="100vh">
        {children}
      </Container>
    </Container>
  );
};

export default MainLayout;
