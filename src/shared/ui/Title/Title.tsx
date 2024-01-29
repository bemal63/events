import classNames from "classnames";
import { ReactNode, memo } from "react";
import style from "./Title.module.scss";

interface TitleProps {
  center?: boolean;
  children: ReactNode;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "span";
}

export const Title = memo(({ center, children, className, tag = "h1" }: TitleProps) => {
  const H = tag as JSX.ElementType;

  const classTitle = classNames(
    style.title,
    { [style.center]: center },
    className,
  );
  return <H className={classTitle}>{children}</H>;
});
