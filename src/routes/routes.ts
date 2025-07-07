import { Router } from "express";
import { ProductRoutes } from "../modules/product/product.route";
import { userRoute } from "../modules/user/user.route";

const router = Router();

const moduleRoutes = [
  { path: "/users", route: new userRoute().router },
  { path: "/products", route: new ProductRoutes().router },
];

moduleRoutes.forEach(({ path, route }) => router.use(path, route));

export default router;
