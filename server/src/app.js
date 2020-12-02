import express from 'express'
import morgan from "morgan";
import cors from 'cors'

import { createRoles } from "./libs/initialSetup";

import routeUsers from './routes/users.routes'
import routeProducts from './routes/products.routes'

const app = express()
createRoles()

app.set('port', process.env.PORT || 4000)

app.use(cors())
//app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/users", routeUsers)
app.use("/api/products", routeProducts)


export default app