import { Box } from '@my/components';
import SignupForm from '../components/auth/SignupForm';
import NavbarLayout from '../components/layouts/NavbarLayout';
import Logo from '../components/Logo';

export function Signup(): JSX.Element {
  return (
    <NavbarLayout>
      <Box.Flex
        height="inherit"
        justify="center"
        flexDir="column"
        maxWidth="280px"
        margin="auto"
      >
        <Box textAlign="center" marginY={6} marginX="auto">
          <Logo />
        </Box>

        <SignupForm />
      </Box.Flex>
    </NavbarLayout>
  );
}

export default Signup;
