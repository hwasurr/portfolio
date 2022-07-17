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
