import routes from "./routes/routes";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 3000;
const server = express();

const corsOptons = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

// usar cors e deixar o front-end usar
server.use(cors(corsOptons));

// para fazer o express entender JSON
server.use(express.json());

// para usar as rotas feitas em routes/routes.ts
server.use("/api", routes);

// rodamos o servidor node aqui
server.listen(PORT, () => {
  console.log(`server is running in port: ${PORT}`);
});
