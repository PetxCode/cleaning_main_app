import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";

import clsx, { ClassValue } from "clsx";

export interface iButton
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonProps> {
  children?: ReactNode;
  icon?: ReactNode;
}

const Button: FC<iButton> = ({
  variant,
  size,
  className,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={twMerge(clsx(buttonProps({ variant, size })))}
    >
      <div>{children}</div>
    </button>
  );
};

export default Button;

const buttonProps = cva("px-4 py-2 border rounded-md text-white", {
  variants: {
    variant: {
      main: "bg-neutral-900",
      success: "bg-green-500",
      warn: "bg-orange-500",
      bad: "bg-red-500",
    },
    size: {
      bg: "text-[25px]",
      md: "text-[15px]",
      sm: "text-[12px]",
    },
  },

  defaultVariants: {
    variant: "main",
    size: "sm",
  },
});
