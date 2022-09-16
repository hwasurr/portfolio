import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

export type ListProps = PropsWithChildren;
export function List({ children }: ListProps): JSX.Element {
  return <ul>{children}</ul>;
}

export interface ListItemProps extends PropsWithChildren {
  listStyle?: 'inside' | 'none' | 'outside';
}
export function ListItem({ children, listStyle = 'none' }: ListItemProps): JSX.Element {
  return <li css={css({ listStyle })}>{children}</li>;
}

List.Item = ListItem;
export default List;
