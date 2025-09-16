'use client';
import { ss, storeSharedState, useSharedState } from '@helper';
import {
  ActionIcon,
  Button,
  Flex,
  Group,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { postLogin } from '@services';
import { setStorage } from '@storage';
import { IconEye, IconEyeClosed } from '@tabler/icons-react';
import { useMutation } from '@tanstack/react-query';
import { enum_auth_mode } from '@ts';
import { ValidationLoginSchema } from '@validations';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [userData, setUserData] = useSharedState<any>(ss.admin);
  const [authMode, setAuthMode] = useSharedState(
    ss.auth_mode,
    enum_auth_mode.login
  );
  const { push } = useRouter();
  const { handleSubmit, values, errors, touched, setFieldValue } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: ValidationLoginSchema,
    onSubmit: (formData) => onLogin(formData),
    validateOnChange: true,
  });

  const {
    data: loginData,
    mutateAsync: tryLogin,
    isPending: loading,
  }: any = useMutation({
    mutationFn: postLogin,
  });

  const onLogin = (formData: any) => {
    tryLogin(formData)
      .then((res: any) => {
        setUserData(res?.user);
        setStorage('token', res.token);
        setStorage('user', res?.user);
        // setStorage('admin_data', res);
        // setStorage('redirect', true);
        storeSharedState(ss.toast, {
          visible: true,
          title: 'Success',
          message: res.message,
          type: 'success',
        });
        location.reload();
      })
      .catch((err: any) => {
        console.log('error:', err);
      })
      .finally(() => {});
  };

  const onInputChange = (e: any) => {
    setFieldValue(e.target.name, e.target.value);
  };

  const onShowHidePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="hgroup">
        <Title className="primary">Login</Title>
        <Text className={'body_light'}>Please enter your login details</Text>
      </div>
      <form onSubmit={handleSubmit}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          size="lg"
          value={values.email}
          error={touched.email && errors.email}
          name={'email'}
          onChange={onInputChange}
        />
        <TextInput
          withAsterisk
          label="Password"
          placeholder="********"
          size="lg"
          type={showPassword ? 'text' : 'password'}
          value={values.password}
          error={touched.password && errors.password}
          name={'password'}
          onChange={onInputChange}
          rightSection={
            <ActionIcon variant="transparent" onClick={onShowHidePassword}>
              {showPassword ? (
                <IconEyeClosed width={20} />
              ) : (
                <IconEye width={20} />
              )}
            </ActionIcon>
          }
        />
        <Group grow>
          <Button type="submit" size="lg" loading={loading}>
            Login
          </Button>
        </Group>
      </form>
    </div>
  );
}

export default LoginForm;
