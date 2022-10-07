import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { loginFormValidation } from 'utils';
import { loginUser } from 'api';
import { StatusMessages } from 'components/StatusMessages';
import { useState } from 'react';
import { setUserInfo } from 'redux/slices';
import { useDispatch } from 'react-redux';
import * as S from './styles';

export function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState({ status: false, message: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const INITIAL_FORM_VALUES = {
    email: '',
    password: '',
  };

  const onSubmit = async ({ email, password }) => {
    setIsSubmitting(true);
    try {
      const result = await loginUser({ email, password });
      dispatch(setUserInfo(result));
      const redirectPath = result.role === 'admin' ? '/admin' : '/store';
      navigate(redirectPath);
    } catch (err) {
      setError({ status: true, message: err.message });
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
      <S.FormTitle>iBikes Login</S.FormTitle>
      <StatusMessages
        message={error.message}
        type="error"
        status={error.status}
      />
      <S.FormContainer>
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
        <S.Input>
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
        </S.Input>
        <S.LoadingButton type="submit" loading={isSubmitting}>
          Login
        </S.LoadingButton>
      </S.FormContainer>
    </S.Form>
  );
}
