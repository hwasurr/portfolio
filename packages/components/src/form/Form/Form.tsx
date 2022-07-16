import { HTMLProps } from 'react';

export type FormProps = HTMLProps<HTMLFormElement>;
export function Form({ onSubmit, children, ...rest }: FormProps): JSX.Element {
  return (
    <form onSubmit={onSubmit} {...rest}>
      {children}
    </form>
  );
}

export default Form;
