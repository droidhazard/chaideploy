import express from "express";
import { config } from "dotenv";
config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("server is ready");
});

// * Get a list of 5 jokes
app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Joke 1",
      content: "This is joke 1",
    },
    {
      id: 2,
      title: "Joke 2",
      content: "This is joke 2",
    },
    {
      id: 3,
      title: "Joke 3",
      content: "This is joke 3",
    },
    {
      id: 4,
      title: "Joke 4",
      content: "This is joke 4",
    },
  ];
  res.send(jokes);
});

app.listen(PORT, () => {
  console.log(`app is listening:${PORT}`);
});
