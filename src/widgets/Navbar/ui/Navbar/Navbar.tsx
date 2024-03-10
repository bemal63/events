import { ReactNode, memo } from "react";
import style from "./Navbar.module.scss";
import { IconFont } from "shared/ui/IconFont/IconFont";
import { Title } from "shared/ui/Title";

interface NavItem {
  item?: NavItem[];
}

interface NavbarProps {
  children?: ReactNode;
  className?: string;
}

export const Navbar = memo(({ children }: NavbarProps) => {
  return (
    <nav className={style.navbar}>
      <Title tag="h1">Event</Title>
      <IconFont className={style.icon} iconName="add" color="default" />
    </nav>
  );
});
