import { useState } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

// ICONS
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// ICONS

type InputProps = typeof Input;

const PasswordInput: InputProps = ({ ...props }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <InputGroup size="lg">
      <Input type={show ? "text" : "password"} {...props} />
      <InputLeftElement
        cursor="pointer"
        onClick={toggleShow}
        color={"gray.300"}
      >
        {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </InputLeftElement>
    </InputGroup>
  );
};

export default PasswordInput;
