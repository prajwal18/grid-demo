import { ToastContainer } from "react-toastify";
import { ChakraProvider } from "@chakra-ui/react";
import "react-toastify/dist/ReactToastify.css";
import Router from "./routes/Router";

function App() {
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
