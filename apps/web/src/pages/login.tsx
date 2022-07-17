import { Box, Text } from '@my/components';
import LoginForm from '../components/auth/LoginForm';
import NavbarLayout from '../components/layouts/NavbarLayout';
import Logo from '../components/Logo';

export function Login(): JSX.Element {
  return (
    <NavbarLayout>
      <Box.Flex
        height="inherit"
        justify="center"
        flexDir="column"
        maxWidth="280px"
        margin="auto"
      >
        <Box textAlign="center" marginY={2}>
          <Logo />
          <Text>catch phrase</Text>
        </Box>

        <LoginForm />
      </Box.Flex>
    </NavbarLayout>
  );
}

export default Login;
