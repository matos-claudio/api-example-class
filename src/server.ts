import express from "express";
import exampleRoutes from "./routes/example-routes";

const app = express();
const PORT = process.env.PORT || 3000;

const router = express.Router();

app.use(express.json());
app.use(express.urlencoded());

router.get("/", (req, res) => {
  res.send("Welcome to the Webhook Server!");
});

router.get("/example", exampleRoutes);

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
