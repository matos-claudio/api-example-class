import express from "express";
import exampleRoutes from "./routes/example-routes";

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

const router = express.Router();

app.use(express.json());
app.use(express.urlencoded());

router.get("/", (req, res) => {
  res.send("Welcome to the Webhook Server!");
});

router.get("/example", exampleRoutes);

app.use(router);


app.listen(PORT, "0.0.0.0" , () => {
  console.log(`Server is running on port ${PORT}`);
});
