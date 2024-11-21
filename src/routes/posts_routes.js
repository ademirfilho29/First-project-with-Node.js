import express from "express";
import { listarposts } from "../controllers/posts_controller.js";

const routes = (app) => {
    app.use(express.json());

    app.get("/posts", listarposts);

}
export default routes
