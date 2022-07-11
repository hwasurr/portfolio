import { render, cleanup } from '@testing-library/react';
import Box from './Box';

afterEach(cleanup);

describe('Box', () => {
  it('render', () => {
    const rendered = render(
      <Box>
        <h1>hi</h1>
      </Box>,
    );
    const hiText = rendered.getByText('hi');
    expect(hiText).toBeTruthy();
  });
});
