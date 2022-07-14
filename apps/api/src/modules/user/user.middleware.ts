import { FieldMiddleware, NextFn, MiddlewareContext } from '@nestjs/graphql';

export const passwordExcludeMiddleware: FieldMiddleware = async (
  ctx: MiddlewareContext,
  next: NextFn,
): Promise<any> => {
  await next();
  return '';
};
