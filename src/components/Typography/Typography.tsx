import clsx from "clsx";
import { ForwardRefRenderFunction, ReactNode, forwardRef, memo } from "react";
import { TypographyDisplay, TypographySize, TypographyVariant } from "./Typography.defaults";

import "./Typography.styles.css";

interface TypographyProps {
  as?: TypographyVariant;
  children?: ReactNode;
  className?: string;
  size?: TypographySize;
  id?: string;
  strong?: boolean;
  display?: TypographyDisplay;
}

const TypographyComponent: ForwardRefRenderFunction<HTMLElement, TypographyProps> = (
  { as = "span", size = "default", className, display = "unset", strong, ...restProps },
  ref,
) => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const Component = as as any;

  return (
    <Component
      ref={ref}
      className={clsx(
        "typography",
        `typography--variant-${as}`,
        `typography--display-${display}`,
        `typography--font-size-${size}`,
        {
          "typography--strong": strong,
        },
        className,
      )}
      {...restProps}
    />
  );
};

export const Typography = memo(forwardRef(TypographyComponent));
