import fs from "fs";

const postsFile = "./data/posts.json"

const readPosts = () => {
  if (!fs.existsSync(postsFile)) {
    fs.writeFileSync(postsFile, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(postsFile, "utf-8"));
};

const writePosts = (posts) => {
  fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2));
};

export const getAll = (req, res) => {
  try {
    const posts = readPosts()
    res.json(posts)
  } catch (err) {
    res.status(400).json({message: "Не удалось получить статьи"})
  }
}

export const getOne = (req, res) => {
  try {
    const posts = readPosts()
    const post = posts.find((p) => p.id === req.params.id)
    if (!post) {
      return res.status(404).json({message: "Статья не найдна"})
    }
    res.json(post)
  } catch (err) {
    res.status(400).json({message: "Не удалось получить статью"})
  }
}

export const create = (req, res) => {
  try {
    const posts = readPosts()
    const newPost = {id: Date.now().toString(), ...req.body}
    posts.push(newPost)
    writePosts(posts)
    res.status(201).json(newPost)
  } catch (err) {
    res.status(500).json({message: "Не удалось создать статью"})
  }
}

export const remove = (req, res) => {
  try {
    const posts = readPosts()
    const filteredPosts = posts.filter((p) => p.id !== req.params.id)
    writePosts(filteredPosts)
    res.json({message: "Статья удалена"})
  } catch (err) {
    res.status(500).json({message: "Не удалось удалить статью"})
  }
}

export const update = (req, res) => {
  try {
    const posts = readPosts()
    const postIndex = posts.findIndex((p) => p.id === req.params.id)
    if(postIndex === -1) {
      return res.status(404).json({message: "Статья не найдена"})
    }
    posts[postIndex] = {...posts[postIndex], ...req.body}
    writePosts(posts)
    res.json({message: "Статья обновлена"})
  } catch (err) {
    res.status(500).json({message: "Не удалось обновить статью"})
  }
}
