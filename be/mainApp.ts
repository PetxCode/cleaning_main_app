import { Application, Request, Response } from "express";
import agent from "./router/agentRouter";
export const mainApp = async (app: Application) => {
  //   Agent routes
  app.use("/api/v1", agent);

  //   default API route

  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "Welcome to Cleaning API server",
      });
    } catch (error) {
      return res.status(404).json({
        message: "Error loading",
      });
    }
  });
};
