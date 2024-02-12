import classNames from "classnames";
import iconStyles from "./IconFont.module.scss";
import styles from "shared/assets/style.module.scss";
export type IconName = keyof typeof styles;
export type IconColor = "warn" | "default";

export interface IconProps {
  className?: string;
  color?: IconColor;
  iconName: IconName;
}

export const IconFont = ({ className, color, iconName }: IconProps) => {
  const iconStyle = classNames(
    styles[iconName],
    color && iconStyles[color],
    className
  );
  return <i className={iconStyle}></i>;
};
