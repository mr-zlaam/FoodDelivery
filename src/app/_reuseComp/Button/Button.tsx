import {} from "react";
import "./Button.scss";
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  variant?:
    | "default"
    | "outline"
    | "danger"
    | "primary"
    | "animated"
    | "dark"
    | "light";
  size?: "sm" | "md" | "lg" | "";
}

const variants = {
  variant: {
    default: "default",
    outline: "outline",
    danger: "danger",
    primary: "primary",
    animated: "baton",
    dark: "dark",
    light: "light",
  },
  size: {
    sm: "sm",
    md: "md",
    lg: "lg",
  },
};

function Button({ children, size, className, variant, ...rest }: ButtonProps) {
  //variants
  const defautVariant = variant === "default" && variants.variant.default;
  const outlineVariant = variant === "outline" && variants.variant.outline;
  const dangerVariant = variant === "danger" && variants.variant.danger;
  const primaryVariant = variant === "primary" && variants.variant.primary;
  const animatedVariant = variant === "animated" && variants.variant.animated;
  const darkVariant = variant === "dark" && variants.variant.dark;
  const lightVariant = variant === "light" && variants.variant.light;
  //Sizes
  const sm = size === "sm" && variants.size.sm;
  const md = size === "md" && variants.size.md;
  const lg = size === "lg" && variants.size.lg;

  return (
    <>
      <button
        {...rest}
        className={`z__btn default ${defautVariant} ${outlineVariant} ${dangerVariant} ${animatedVariant} ${primaryVariant} ${darkVariant} ${lightVariant} ${sm} ${md} ${lg}  ${className}`}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
