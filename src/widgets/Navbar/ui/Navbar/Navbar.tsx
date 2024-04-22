import { memo, ReactNode } from "react";
import style from "./Navbar.module.scss";
import { IconFont } from "shared/ui/IconFont/IconFont";
import { Title } from "shared/ui/Title";
import { Link } from "react-router-dom";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import IconButton from "@mui/joy/IconButton";

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
        <Title tag="h1">Event</Title>
      </Link>
      <Link to="/create">
        <IconButton variant="plain" size="lg">
          {/* <IconFont className={style.icon} iconName="add" color="dark" /> */}
          <Add />
        </IconButton>
      </Link>
    </nav>
  );
});
