import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

export type ListProps = PropsWithChildren;
export function List({ children }: ListProps): JSX.Element {
  return <ul>{children}</ul>;
}

export type ListItemProps = PropsWithChildren;
export function ListItem({ children }: ListItemProps): JSX.Element {
  return <li css={css({ listStyle: 'none' })}>{children}</li>;
}

List.Item = ListItem;
export default List;
