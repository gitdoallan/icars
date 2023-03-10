import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { loginFormValidation } from 'utils';
import { createUser } from 'api';
import { StatusMessages } from 'components/StatusMessages';
import { useState } from 'react';
import { setUserInfo } from 'redux/slices';
import { useDispatch } from 'react-redux';
import * as S from './styles';

export function SignUpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ status: false });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const INITIAL_FORM_VALUES = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = async ({ name, email, password }) => {
    setIsSubmitting(true);
    try {
      const result = await createUser({ name, email, password });
      dispatch(setUserInfo(result));
      const redirectPath = result.role === 'admin' ? '/admin' : '/store';
      navigate(redirectPath);
    } catch ({ response }) {
      setStatus({ status: true, message: response.data.message, type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: INITIAL_FORM_VALUES,
    validationSchema: loginFormValidation,
    onSubmit: () => onSubmit(formik.values),
  });

  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <S.FormTitle>Welcome to iCars!</S.FormTitle>
      <S.FormSubtitle>Sign up to get started.</S.FormSubtitle>
      <StatusMessages {...status} />
      <S.FormContainer>
        <S.Input>
          <S.LabelText>Enter your name</S.LabelText>
          <S.TextField
            label="Name *"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </S.Input>
        <S.Input>
          <S.LabelText>Enter your email</S.LabelText>
          <S.TextField
            label="Email *"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </S.Input>
        <S.InputGrid>
          <S.LabelText>Enter your password</S.LabelText>
          <S.TextField
            label="Password *"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </S.InputGrid>
        <S.InputGrid>
          <S.LabelText>Confirm your password</S.LabelText>
          <S.TextField
            label="Confirm your password *"
            name="confirmPassword"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          />
        </S.InputGrid>
        <S.Agreement>
          By clicking Sign up button you agree with our
          {' '}
          <S.Link component={Link} to="/privacy-policy">
            Privacy policy.
          </S.Link>
        </S.Agreement>
        <S.LoadingButton type="submit" loading={isSubmitting}>
          Sign Up
        </S.LoadingButton>
      </S.FormContainer>
    </S.Form>
  );
}
