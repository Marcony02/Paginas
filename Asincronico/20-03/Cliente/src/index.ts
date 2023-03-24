import * as express from "express"
import { AppDataSource } from "./data-source"
import cors =require ("cors")
import helmet from "helmet"



const PORT=process.env.PORT||3000

AppDataSource.initialize().then(async () => {

    const app =express()
    app.use(express.json())
    app.use(cors())
    app.use(helmet())
    app.use('/',routes)

  

    

     app.listen(PORT,()=>{console.log(`Servidor corriendo puerto ${PORT}`)});

}).catch(error => console.log(error))



