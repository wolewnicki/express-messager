import express, { Request, Response, Router } from 'express'
import { Pool, QueryResult } from 'pg'
import { DataController } from './controllers/getData'
import cors from 'cors'
import events from 'events'
import { getChannelPg } from './database/pg'
import { selectString } from './queries/queries'
import { Channel, ChannelRepository } from './types/functions'
import { makeRepository } from './repository/channelRepository'
require('dotenv').config()

const app: express.Application = express()
const port: number = 3000
export const emitter = new events.EventEmitter()
export const appPool: Pool = new Pool()

export const getChannelRepository = makeRepository(getChannelPg(appPool, selectString('channel')))

const makeRoute = (app: express.Application, route: string, channelPromise: Promise<Channel[]> ) => {
    app.get(route, async (req, res) => {
        const result = await channelPromise.then(res => res)
        res.send(result)
    })
}

makeRoute(app, '/test', getChannelRepository.getChannel())

app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({message: 'first express api!!'})
})
app.listen(port, ()  => {
    console.log(`server is listening on ${port}`)
})

app.use('/v1', DataController)


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

const p = appPool.query("SELECT * FROM channel")

export const pv = async () => await p.then((res: QueryResult<Channel>) => res.rows)
const foo = async () => 1234;
const bar = foo()
bar.then(x => console.log(x))