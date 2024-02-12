import classNames from "classnames";
import { ReactNode, memo } from "react";
import style from "./Panel.module.scss";

interface PanelProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  pointer?: boolean;
  hoverShadow?: boolean;
}

export const Panel = memo(
  ({ children, className, onClick, pointer, hoverShadow }: PanelProps) => {
    const allStyles = classNames(
      style.component,
      {
        [style.cursor]: pointer,
        [style.shadow]: hoverShadow,
      },
      className
    );
    return (
      <div className={allStyles} onClick={onClick}>
        {children}
      </div>
    );
  }
);
