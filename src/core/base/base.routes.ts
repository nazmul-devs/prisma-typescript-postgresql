import { Router } from "express";

export abstract class BaseRoute {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  // Must be implemented by child routes
  protected abstract initializeRoutes(): void;
}
