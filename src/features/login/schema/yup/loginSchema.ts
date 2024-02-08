import * as yup from "yup";

export const loginSchema = yup.object().shape({
  phone: yup.string().required("Enter your phone number."),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password has to be longer than 8 characters."),
});
