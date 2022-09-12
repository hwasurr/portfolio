import { A, Heading } from '@my/components';

export default function Logo(): JSX.Element {
  return (
    <A href="/" style={{ textDecoration: 'none', cursor: 'pointer' }}>
      <Heading.H4
        sx={{
          fontFamily: 'Calibre',
        }}
        color="white"
      >
        Hwasurr
      </Heading.H4>
    </A>
  );
}
