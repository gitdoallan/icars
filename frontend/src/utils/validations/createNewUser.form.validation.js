import * as yup from 'yup';

export const createNewUserFormValidation = yup.object({
  name: yup
    .string('Enter name')
    .trim()
    .min(3, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Name is required'),
  email: yup
    .string('Enter email')
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  password: yup
    .string()
    .required('Please specify password')
    .min(6, 'The password should have at minimum length of 6 characters'),
  role: yup
    .string()
    .required('Please specify role'),
});
