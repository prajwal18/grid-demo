import { Button, Stack } from "@chakra-ui/react";
import TextInput from "../../../components/form/TextInput";

// ICONS
import EmailIcon from "@mui/icons-material/Email";
import PasswordInput from "../../../components/form/PasswordInput";
// ICONS

const LoginForm = () => {
  return (
    <Stack as="form" spacing={4}>
      <TextInput
        name="email"
        placeholder="Enter your email"
        icon={() => <EmailIcon />}
      />
      <PasswordInput name="password" placeholder="Password" />
      <Button type="submit">Submit</Button>
    </Stack>
  );
};

export default LoginForm;
