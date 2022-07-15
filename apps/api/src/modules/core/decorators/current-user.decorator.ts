import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';
import { UserProfile } from '../../../interfaces/auth.profile';

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext): UserProfile => {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req as Request;
    return req.user;
  },
);
