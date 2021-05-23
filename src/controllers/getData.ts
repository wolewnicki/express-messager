import { Router, Request, Response } from 'express' 
import { getChannelPg, insertMessage, queryConfit } from '../database/pg'
import { insertString, selectString, test, } from '../database/dbQueries'
import { channelRepo } from '../repository/channelRepository'
import { Channel, ChannelRepository, Test } from '../types/functions'
import { dbContext } from '../database/dbContext'
import { emitter } from '../emitters/appEmitter'

const router: Router = Router()

const message = {
    user : 'will',
    body : 'i am test'
}


const makeRoute = (router: Router, route: string, channelPromise: Promise<Channel[]> ) => {
    router.get(route, async (req, res) => {
        const result = await channelPromise.then(res => res)
        res.send(result)
    })
}

makeRoute(router, '/getChannel', channelRepo.getChannel())

router.post('/test', (req, res) => {
    emitter.emit('test', req.body)
})

router.get('/insertMessage-:body', (req: Request, res: Response) => {
    console.log(req.params)
    insertMessage(dbContext, insertString(`${req.params.body}`))
}) 

router.get('/idToString', (req: Request, res: Response) => {
    queryConfit(dbContext, test)
})

// createRoute(router, '/getChannel', )
// createRoute(router, '/getMessage', 'message')



export const DataController: Router = router

