import {memo, ReactNode} from "react";
import style from "./Navbar.module.scss";
import {IconFont} from "shared/ui/IconFont/IconFont";
import {Title} from "shared/ui/Title";
import {Link} from "react-router-dom";

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
      <Link to="/" className={style.event}>
        <Title tag="h1">
          Event
        </Title>
      </Link>
      <Link to="/create">
        <IconFont className={style.icon} iconName="add" color="dark" />
      </Link>
    </nav>
  );
});
