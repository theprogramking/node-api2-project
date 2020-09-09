const express = require("express");
const server = express();
const PORT = 8000;

const postsRoutes = require("./posts/postsRoutes");

server.use("/api/posts", postsRoutes);

server.get("/", (req, res) => res.send("API is a go!"));

server.listen(PORT, () => console.log(`API running on port ${PORT}`));
