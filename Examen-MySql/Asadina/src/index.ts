import cors = require("cors");
import * as express from "express"
import helmet from "helmet";
import { AppDataSource } from "./data-source"
import routes from "./routes";





const PORT= process.env.PORT||3000

AppDataSource.initialize().then(async () => {

   //CREATE EXPRESS APP

   const app =express();
   app.use(express.json())
   app.use(cors());
   app.use(helmet());
   app.use('/',routes);


   app.listen(PORT,()=>{console.log(`Servidor corriendo puerte ${PORT}`)});

}).catch(error => console.log(error))
