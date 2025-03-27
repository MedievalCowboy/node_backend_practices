import express, {Request, Response, NextFunction} from "express";
import morgan from "morgan"; //http requests logger

import config from "./src/config"; //env config access
import routes from "./src/routes"; // all webapp routes

const app = express();

//set app to work with json
app.use(express.json());

app.use(morgan("dev"));

app.use(routes);

//404 handling middleware
app.use((req:Request, res:Response, next:NextFunction) => {
  res.status(404).json({
    error: {
      status: 404,
      message: "page not found",
    },
  });
});

// Error handling middleware
app.use((err:any, req:Request, res:Response, next:NextFunction) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message || "Internal Server Error",
    },
  });
});

//run webapp
app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}!`);
  console.log(`http://${config.url}:${config.port}/`);
});
