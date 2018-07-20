import express from "express";
import config from "../../config";

const route = () => {
  const router = new express.Router();
  router.route("/").get((req, res) => {
    res.send("all passenger...");
  });
  return router;
};

export default {
  route,
  routePrefix: `/${config.version}/passenger`
};
