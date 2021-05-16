import express, { Request, Response } from 'express'
import { Pool, QueryResult } from 'pg'
import { DataController } from './controllers/getData'
import cors from 'cors'
import events from 'events'
require('dotenv').config()

const app: express.Application = express()
const port: number = 3000
export const emitter = new events.EventEmitter()
export const appPool: Pool = new Pool()

app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({message: 'first express api!!'})
})
app.listen(port, ()  => {
    console.log(`server is listening on ${port}`)
})

app.use('/v1', DataController)

const listen = (item: any) => {
    console.log(item)
}

emitter.on('pg', listen)

const initiate = () => {
    
}