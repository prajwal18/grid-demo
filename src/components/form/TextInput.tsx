import { FC, useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useField } from "formik";

interface ITextInput {
  name: string;
  type?: string;
  placeholder: string;
  icon?: any;
}
const TextInput: FC<ITextInput> = ({
  name,
  type = "text",
  placeholder,
  icon,
}) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };

  const [field, meta] = useField(name);
  return (
    <FormControl isInvalid={Boolean(meta.touched && meta.error)}>
      <InputGroup size="lg">
        <Input
          type={type}
          name={name}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          errorBorderColor="red.500"
          placeholder={placeholder}
        />
        {icon && (
          <InputLeftElement
            cursor="pointer"
            onClick={toggleShow}
            color={"gray.300"}
          >
            {icon()}
          </InputLeftElement>
        )}
      </InputGroup>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextInput;
