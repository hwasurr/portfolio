import { Interpolation } from '@emotion/react';
import { ITheme } from '@my/style';
import { ImgHTMLAttributes } from 'react';

export interface MyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  sx?: Interpolation<ITheme>;
}
export default function MyImage({ sx, alt, ...rest }: MyImageProps): JSX.Element {
  return <img alt={alt} css={sx} {...rest} />;
}
