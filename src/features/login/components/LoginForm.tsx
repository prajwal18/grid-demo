import { FC } from "react";
import { Button, Center, CircularProgress, Stack } from "@chakra-ui/react";
import { useFormikContext } from "formik";
import TextInput from "../../../components/form/TextInput";
import PasswordInput from "../../../components/form/PasswordInput";

// ICONS
import EmailIcon from "@mui/icons-material/Email";
// ICONS

interface ILoginForm {
  loading: boolean;
}
const LoginForm: FC<ILoginForm> = ({ loading }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <TextInput
          name="phone"
          placeholder="Enter your phone number"
          icon={() => <EmailIcon />}
        />
        <PasswordInput name="password" placeholder="Password" />

        {loading ? (
          <Center>
            <CircularProgress isIndeterminate color="green.300" size="40px" />
          </Center>
        ) : (
          <Button type="submit" isDisabled={loading}>
            Submit
          </Button>
        )}
      </Stack>
    </form>
  );
};

export default LoginForm;
