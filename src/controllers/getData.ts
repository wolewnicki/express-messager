import { Router, Request, Response } from 'express' 
import { getChannelPg, insertMessage, queryConfit } from '../database/pg'
import { appPool, emitter, pv } from '../app'
import { insertString, selectString, test, } from '../queries/queries'
import { Channel, ChannelRepository, Test } from '../types/functions'
import { createRoute } from '../routes/routeDefinition'
import { makeRepository } from '../repository/channelRepository'

const router: Router = Router()

const message = {
    user : 'will',
    body : 'i am test'
}

// const localPool = appPool
// const makeRoute = (router: Router, route: string, channelPromise: Promise<Channel[]> ) => {
//     router.get(route, async (req, res) => {
//         const result = await channelPromise.then(res => res)
//         res.send(result)
//     })
// }

// const chanRepo = makeRepository(getChannelPg(localPool, selectString('channel')))
// makeRoute(router, '/getChannel', chanRepo.getChannel())


router.get('/insertMessage-:body', (req: Request, res: Response) => {
    console.log(req.params)
    insertMessage(appPool, insertString(`${req.params.body}`))
}) 

router.get('/idToString', (req: Request, res: Response) => {
    queryConfit(appPool, test)
})

// createRoute(router, '/getChannel', )
// createRoute(router, '/getMessage', 'message')



export const DataController: Router = router

