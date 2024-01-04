// Useful later for example in storybook
export const TYPOGRAPHY_DISPLAYS = ["unset", "block", "inline-block"] as const;
export const TYPOGRAPHY_SIZES = ["xs", "sm", "md", "lg", "default"] as const;
export const TYPOGRAPHY_VARIANTS = ["h1", "h2", "p", "span"] as const;

export type TypographySize = (typeof TYPOGRAPHY_SIZES)[number];
export type TypographyDisplay = (typeof TYPOGRAPHY_DISPLAYS)[number];
export type TypographyVariant = (typeof TYPOGRAPHY_VARIANTS)[number];
