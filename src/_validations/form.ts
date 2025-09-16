import { object, string } from 'yup';

export const ValidationLoginSchema = object().shape({
  email: string()
    .email('Please enter a valid email address')
    .required('Please enter your email address'),
  password: string()
    .required('Please enter your password')
    .min(6, 'Minimum 6 characters')
    .max(12, 'Maximum 12 characters'),
});
