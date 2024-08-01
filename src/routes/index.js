import { Router } from "express";
import cartsRouter from "./carts.routes.js";
import productsRouter from "./products.routes.js";
import sessionRouter from "./session.routes.js"

const router = Router();

router.use("/products", productsRouter);
router.use("/carts", cartsRouter);
router.use("/session", sessionRouter);
router.get("*", async (req, res) => {
    try {
      res.status(404).json({ status: "error", msg: "Route not found" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: "Error", msg: "Internal server error" });
    }
  });

export default router;
