import { CustomDecorator, SetMetadata } from '@nestjs/common';
import { Role } from '../../database/base.entity';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]): CustomDecorator<string> =>
  SetMetadata(ROLES_KEY, roles);
