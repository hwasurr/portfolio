import { Box, Card, Text } from '@my/components';
import LoginForm from '../components/auth/LoginForm';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';

export function Login(): JSX.Element {
  return (
    <Box>
      <Navbar />
      <Card height="99vh">
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
      </Card>
    </Box>
  );
}

export default Login;
