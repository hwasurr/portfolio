export const toLowerDashedCase = (s: string): string => {
  return s.trim().toLowerCase().split(' ').join('-');
};
