import style from "./LoginPage.module.scss";
import { Paper, TextField } from "@mui/material";
import { Title } from "shared/ui/Title";
import { Button } from "@mui/joy";

export const LoginPage = () => {
  return (
    <Paper className={style.form}>
      <Title center tag="h3" className={style.title}>
        Войти
      </Title>
      <TextField
        className={style.field}
        label="E-Mail"
        helperText="Введите свой e-mail"
      />
      <TextField
        className={style.field}
        label="Пароль"
        type="password"
        helperText="Введите пароль"
      />
      <Button variant="soft" size="lg" color="neutral">
        Войти
      </Button>
    </Paper>
  );
};
