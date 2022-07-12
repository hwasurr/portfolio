import { Box, Card, Heading, Text } from '@my/components';
import GlobalLayout from '../components/GlobalLayout';

export function Index(): JSX.Element {
  return (
    <GlobalLayout>
      <Box.Center>
        <Heading.H1 color="primary">Heading.H1 테스트</Heading.H1>
        <Heading.H2 color="primary">Heading.H2 테스트</Heading.H2>
        <Heading.H3 color="primary">Heading.H3 테스트</Heading.H3>
        <Heading.H4 color="primary">Heading.H4 테스트</Heading.H4>
        <Heading.H5 color="primary">Heading.H5 테스트</Heading.H5>
        <Heading.H6 color="primary">Heading.H6 테스트</Heading.H6>
        <Text fontSize="xs">Text 테스트</Text>
        <Text fontSize="xs">Text 테스트</Text>
        <Text fontSize="sm">Text 테스트</Text>
        <Text>Text 테스트</Text>
        <Text fontSize="lg">Text 테스트</Text>
        <Text fontSize="xl">Text 테스트</Text>
        <Text fontSize="2xl">Text 테스트</Text>
        <Text fontSize="3xl">Text 테스트</Text>
      </Box.Center>

      <Box.Flex justify="center" align="center" as="section">
        <Text fontSize="xs">Text 테스트</Text>
        <Text fontSize="xs">Text 테스트</Text>
        <Text fontSize="sm">Text 테스트</Text>
        <Text>Text 테스트</Text>
        <Text fontSize="lg">Text 테스트</Text>
        <Text fontSize="xl">Text 테스트</Text>
        <Text fontSize="2xl">Text 테스트</Text>
        <Text fontSize="3xl">Text 테스트</Text>
      </Box.Flex>

      <Box.Flex gap={4}>
        <Card as="section" padding={1} align="center" justify="center">
          <Text fontSize="xs">Text 테스트</Text>
          <Text fontSize="xs">Text 테스트</Text>
          <Text fontSize="sm">Text 테스트</Text>
          <Text>Text 테스트</Text>
          <Text fontSize="lg">Text 테스트</Text>
          <Text fontSize="xl">Text 테스트</Text>
          <Text fontSize="2xl">Text 테스트</Text>
          <Text fontSize="3xl">Text 테스트</Text>
        </Card>
        <Card as="section" padding={1} align="center" justify="center">
          <Text fontSize="xs">Text 테스트</Text>
          <Text fontSize="xs">Text 테스트</Text>
          <Text fontSize="sm">Text 테스트</Text>
          <Text>Text 테스트</Text>
          <Text fontSize="lg">Text 테스트</Text>
          <Text fontSize="xl">Text 테스트</Text>
          <Text fontSize="2xl">Text 테스트</Text>
          <Text fontSize="3xl">Text 테스트</Text>
        </Card>
      </Box.Flex>

      <Card as="article" padding={0} align="center" justify="center">
        <img
          style={{ borderRadius: '16px', maxWidth: '100%', objectFit: 'cover' }}
          alt="test"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--JL9m9ZUR--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rj5848hnd5n57li42tsz.png"
        />
      </Card>
    </GlobalLayout>
  );
}

export default Index;
