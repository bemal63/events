import { useState } from "react";
import styles from "./CreatePostPage.module.scss";

export const CreatePostPage = () => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setImage(null)
  }

  const handleSubmit = () => {
    console.log("Создан пост:", { title, text, image });
    // Логика отправки поста на сервер будет позже
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.titleInput}
        type="text"
        placeholder="Заголовок поста..."
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        className={styles.textArea}
        placeholder="Введите текст поста..."
        value={text}
        onChange={handleTextChange}
      />
      <label className={styles.fileLabel}>
        Выбрать файл
        <input
          className={styles.fileInput}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>
      {image && (
        <div className={styles.previewWrapper}>
          <img className={styles.preview} src={image} alt="Preview" />
          <button className={styles.removeButton} onClick={handleRemoveImage}>
            ✖
          </button>
        </div>
      )}
      <div className={styles.actions}>
        <button className={styles.button} type="button">
          Добавить картинку
        </button>
        <button className={styles.button} type="button" onClick={handleSubmit}>
          Опубликовать
        </button>
      </div>
    </div>
  );
};
