import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { Box, Text } from "@chakra-ui/react";
import { toast } from "react-toastify";
import { loginSchema } from "../schema/yup/loginSchema";
import { LoginDataType } from "../types/loginType";
import LoginForm from "./LoginForm";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../../generated/graphql";
import { setIsLoading, setSession } from "../../../store/slice/sessionSlice";

const FormOnlySection = () => {
  const [loginUserFn, { loading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values: LoginDataType) => {
    // isLoading from session slice in store is used to re-initialize Apollo client instance.
    dispatch(setIsLoading(true));
    loginUserFn({ variables: values })
      .then((response) => response.data)
      .then((data) => data?.signInUser)
      .then(({ token }: any) => {
        dispatch(setSession({ token }));
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        dispatch(setIsLoading(false));
      });
  };

  return (
    <Formik
      initialValues={{ phone: "", password: "" }}
      validationSchema={loginSchema}
      enableReinitialize={true}
      validateOnBlur={true}
      onSubmit={handleSubmit}
    >
      <LoginForm loading={loading} />
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
