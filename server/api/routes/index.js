import AuthRouter from "./auth/auth.router";
import PassengerRouter from "./passenger/passenger.router";
import config from "../config";
import jwtMiddleware from "express-jwt-middleware";

/**Endoced jwtwebtoken */
const jwtCheck = jwtMiddleware(config.jwtSecret);

const AppRoutes = app => {
  app.use(AuthRouter.routePrefix, AuthRouter.route());
  app.use(PassengerRouter.routePrefix, jwtCheck, PassengerRouter.route()); //App Master Middleware
};

export default AppRoutes;
