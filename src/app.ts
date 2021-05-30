import express, { Request, Response, Router } from 'express'
import { Events, Pool, QueryResult } from 'pg'
import { DataController } from './controllers/getData'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config

const app: express.Application = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(Router())
app.use('/v1', DataController)


app.get('/1', (req: Request, res: Response) => {
    res.status(200).json({message: 'first express api!!'})
})
app.listen(port, ()  => {
    console.log(`server is listening on ${port}`)
})


