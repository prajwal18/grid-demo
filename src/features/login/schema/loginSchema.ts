import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("Enter a valid email.").required("Enter your email."),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password has to be longer than 8 characters."),
});
