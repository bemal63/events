import { Avatar, Paper, TextField } from "@mui/material";
import style from "./RegisterPage.module.scss";
import { Title } from "shared/ui/Title";
import { Button } from "@mui/joy";

export const RegisterPage = () => {
  return (
    <Paper className={style.form}>
      <Title className={style.title} center tag="h3">
        Регистрация
      </Title>
      <div className={style.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <TextField
        helperText="Имя и Фамилия"
        className={style.field}
        label="Полное имя"
      />
      <TextField helperText="E-mail" className={style.field} label="E-Mail" />
      <TextField helperText="Пароль" className={style.field} label="Пароль" />
      <Button variant="soft" color="neutral" size="lg">
        Регистрация
      </Button>
    </Paper>
  );
};
