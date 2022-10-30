import { css } from '@emotion/react';
import { motion, MotionProps } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { BoxProps } from '../Box/Box';

export type ListProps = PropsWithChildren;
export function List({ children }: ListProps): JSX.Element {
  return <ul>{children}</ul>;
}

export interface ListItemProps extends PropsWithChildren {
  listStyle?: 'inside' | 'none' | 'outside';
  type?: 'button' | 'li';
  sx?: BoxProps['sx'];
  onClick?: () => void;
  motionProps?: MotionProps;
}
export function ListItem({
  children,
  listStyle = 'none',
  type = 'li',
  onClick,
  sx,
  motionProps,
}: ListItemProps): JSX.Element {
  if (type === 'button') {
    return (
      <motion.button
        type="button"
        css={[
          {
            display: 'block',
            background: 'transparent',
            textDecoration: 'inherit',
            cursor: 'pointer',
            border: '1px solid transparent',
            textAlign: 'inherit',
            fontSize: 'inherit',
          },
          sx,
        ]}
        onClick={onClick}
        {...motionProps}
      >
        {children}
      </motion.button>
    );
  }
  return <li css={[css({ listStyle }), sx]}>{children}</li>;
}

List.Item = ListItem;
export default List;
