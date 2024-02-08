import { ToastContainer } from "react-toastify";
import { ChakraProvider } from "@chakra-ui/react";
import "react-toastify/dist/ReactToastify.css";
import Router from "./routes/Router";
import useSession from "./hooks/useSession";

function App() {
  useSession();
  return (
    <>
      <ChakraProvider>
        <Router />
        <ToastContainer />
      </ChakraProvider>
    </>
  );
}

export default App;
