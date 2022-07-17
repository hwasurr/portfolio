import Text, { TextProps } from '../../layouts/Text/Text';

export interface FormErrorTextProps extends TextProps {
  isError: boolean;
}
export function FormErrorText({
  isError = false,
  color = 'error',
  fontSize = 'xs',
  ...props
}: FormErrorTextProps): JSX.Element | null {
  if (!isError) return null;
  return <Text color={color} fontSize={fontSize} {...props} />;
}

export default FormErrorText;
