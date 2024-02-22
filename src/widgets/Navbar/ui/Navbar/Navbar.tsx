import { ReactNode, memo } from "react";
import style from "./Navbar.module.scss";

interface NavItem {
  item?: NavItem[];
}

interface NavbarProps {
  children: ReactNode;
  className?: string;
}

export const Navbar = memo(({ children }: NavbarProps) => {
  return <nav className={style.navbar}>{children}</nav>;
});
