export const leftSlideTransition =
  'transform 0.4s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)';

export const leftSlideVariants = {
  initial: { opacity: 0, x: -25 },
  whileInView: { opacity: 1, x: 0, transition: { duration: 0.4 } },
} as const;

export const leftSlideMotionProps = {
  variants: leftSlideVariants,
  initial: 'initial',
  whileInView: 'whileInView',
  viewport: { once: true, amount: 0.5 },
};
