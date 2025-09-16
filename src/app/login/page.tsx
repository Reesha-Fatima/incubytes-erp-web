'use client';
import { images } from '@assets';
import { LoginForm } from '@forms';
import { ss, useSharedState } from '@helper';
import { Box, Grid } from '@mantine/core';
import { enum_auth_mode } from '@ts';
import classNames from 'classnames';
import Image from 'next/image';
import styles from './styles.module.scss';

const Login = () => {
  const [authMode, setAuthMode] = useSharedState<enum_auth_mode | null>(
    ss.auth_mode,
    enum_auth_mode.login
  );

  return (
    <div className={classNames(styles.wrapper, 'form-wrap')}>
      <Grid align={'center'} justify={'center'}>
        <Grid.Col
          className={classNames(styles.loginLeftCol, 'cover1')}
          span={{ base: 12, lg: 6 }}
        >
          <video autoPlay muted loop playsInline>
            <source
              src="https://hazziassets.blr1.cdn.digitaloceanspaces.com/matchify/assets/home-video1.mp4"
              type="video/mp4"
            />
          </video>

          {authMode === enum_auth_mode.login && (
            <Box className="content">
              <Image src={images.logo} alt="logo" width={200} height={200} />
            </Box>
          )}
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, lg: 6 }}
          className={classNames(styles.loginRightCol)}
        >
          <div className={styles.formWrap}>
            {authMode === enum_auth_mode.login ? <LoginForm /> : null}
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};
export default Login;
