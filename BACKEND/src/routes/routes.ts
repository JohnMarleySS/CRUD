import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();

// conexão com o prisma
const prisma = new PrismaClient();

// metodo de get, para tdas as datas, pegadno todos os itens do banco de dados
router.get("/", async (req: Request, res: Response) => {
  const products = await prisma.products.findMany();
  console.log("Deu GET aqui");

  res.status(200).json(products);
});

// post, adiciono no banco de dados, eu tenho um schema de como os dados tem que vir do body
router.post("/", async (req: Request, res: Response) => {
  const { title, description, price } = req.body;

  const products = await prisma.products.create({
    data: {
      title,
      description,
      price,
    },
  });
  res.status(200).json(products);
});

// Rota de get pelo id, precisamos pegar o id recebido por parametros, depois buscamos
router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await prisma.products.findMany({
    where: {
      id: Number(id),
    },
  });
  res.status(200).json(product);
});

// rota de delete que recebe um id pelo parametro
router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await prisma.products.delete({
    where: {
      id: Number(id),
    },
  });

  res.json(product);
});

// atualizar com base no id, pegamos o id por parametros, fazer um update da data pelo body,

// options server para devolter o item atualiado
router.put("/:id", async (req: Request, res: Response) => {
  const { title, description, price } = req.body;
  const { id } = req.params;

  const product = await prisma.products.update({
    where: { id: Number(id) },
    data: { title: title, description: description, price: price },
  });
  res.status(200).json(product);
});

export default router;
