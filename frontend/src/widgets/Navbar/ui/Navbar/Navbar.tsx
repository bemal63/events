import { memo } from "react";
import style from "./Navbar.module.scss";
import { Title } from "shared/ui/Title";
import { Link } from "react-router-dom";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import IconButton from "@mui/joy/IconButton";
// import Button from "@mui/material/Button";

// interface NavItem {
//   item?: NavItem[];
// }

// interface NavbarProps {
//   children?: ReactNode;
//   className?: string;
// }

export const Navbar = memo(() => {
  return (
    <nav className={style.navbar}>
      <Link to="/" className={style.event}>
        <Title tag="h1">Event</Title>
      </Link>
      <div className={style.button}>
        <Link to="/login">
          <Button size="lg" color="neutral" variant="plain">
            Войти
          </Button>
        </Link>
        <Link to="/register">
          <Button size="lg" color="neutral" variant="plain">
            Регистрация
          </Button>
        </Link>
        <Link to="/create">
          <IconButton variant="plain" size="lg">
            <Add />
          </IconButton>
        </Link>
      </div>
    </nav>
  );
});
