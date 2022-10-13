import * as yup from 'yup';

export const editUserFormValidation = yup.object({
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
  role: yup
    .string()
    .required('Please specify role'),
});
