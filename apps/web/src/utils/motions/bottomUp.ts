export const bottomUpVariants = {
  whileInView: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  initial: { y: 30, opacity: 0 },
} as const;

export const bottomUpMotionProps = {
  variants: bottomUpVariants,
  whileInView: 'whileInView',
  initial: 'initial',
  viewport: { once: true, amount: 0.5 },
};
