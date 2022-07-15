import { registerEnumType } from '@nestjs/graphql';

/** 실내/외 구분 */
export enum Site {
  INDOOR = 'INDOOR',
  OUTDOOR = 'OUTDOOR',
  BOTH = 'BOTH',
}

/** 죄식/입식 구분 */
export enum StandingStyle {
  SEDENTARY = 'SEDENTARY',
  STANDING = 'STANDING',
}

/** 사용자 권한역할 */
export enum Role {
  ADMIN = 'ADMIN',
  GUEST = 'GUEST',
  EDITOR = 'EDITOR',
}

registerEnumType(Site, { name: 'Site' });
registerEnumType(StandingStyle, { name: 'StandingStyle' });
registerEnumType(Role, { name: 'Role' });
