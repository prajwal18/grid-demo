import { Box, Text } from "@chakra-ui/react";
import { Formik } from "formik";
import { loginSchema } from "../schema/loginSchema";
import { LoginDataType } from "../types/loginType";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

const FormOnlySection = () => {
  const handleSubmit = (values: LoginDataType) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      enableReinitialize={true}
      validateOnBlur={true}
      onSubmit={handleSubmit}
    >
      <LoginForm />
    </Formik>
  );
};

const FormContainer = () => {
  return (
    <Box p={"30px"} borderRadius={"10px"} bg="white" maxW="500px" w="full">
      <Text fontSize="3xl" fontWeight={700} color="blue.700" mb={4}>
        Login Page
      </Text>

      <FormOnlySection />

      <Text
        mt={"16px"}
        color="blue.700"
        textDecoration={"underline"}
        textAlign={"right"}
      >
        <Link to="/" style={{ marginTop: "20px" }}>
          Go to home page
        </Link>
      </Text>
    </Box>
  );
};

export default FormContainer;
