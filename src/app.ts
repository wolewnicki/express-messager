import express, { Request, Response } from 'express'
import { Pool, QueryResult } from 'pg'
import { DataController } from './controllers/getData'
import cors from 'cors'
import events from 'events'
import { getChannel } from './database/pg'
import { selectString } from './queries/queries'
import { Channel } from './types/functions'
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

const selectBuilder = (table: string) => {
    getChannel(appPool, selectString(table))
}

const chan = (chan: Channel) => {
    return chan
}

emitter.on('workDone', (val: Channel) => {

})

const getEmitterVal = (callback: any): any => {
    emitter.on('test', (val: Channel) => {
        callback(val)
    })
}

emitter.emit('test', {id: 1, created_by: 'test', created_date: '2021-05-04', description: 'test'})
const test = getEmitterVal((x: any) => x)
console.log(test)