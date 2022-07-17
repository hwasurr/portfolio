import { Box, Card, Text } from '@my/components';
import SignupForm from '../components/auth/SignupForm';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';

export function Signup(): JSX.Element {
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

          <SignupForm />
        </Box.Flex>
      </Card>
    </Box>
  );
}

export default Signup;
