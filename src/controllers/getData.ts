import { Router, Request, Response } from 'express' 
import { insertMessage, queryConfit } from '../database/pg'
import { insertString, test, } from '../database/dbQueries'
// import { channelRepo } from '../repository/channelRepository'
import { Body, Channel } from '../types/functions'
import { dbContext } from '../database/dbContext'
import { sendMsg } from '../emitters/appEmitter'
import { ParamsDictionary } from 'express-serve-static-core'

const router: Router = Router()


const makeRoute = (router: Router, route: string, channelPromise: Promise<Channel[]> ) => {
    router.get(route, async (req, res) => {
        const result = await channelPromise.then(res => res)
        res.send(result)
    })
}

// makeRoute(router, '/getChannel', channelRepo.getChannel())

router.post('/test', async (req: Request<ParamsDictionary, any, Body>, res) => {

    const controllerPromise = new Promise<string>( (resolve, rej) => {
        const resolvefunc = async () => { 
            sendMsg(req.body)
            resolve('Resolved!')
        }
        resolvefunc()
        .then(resu => res.send('passed'))
        .catch((err) => {rej(err) 
        res.send(`failed because: ${err}`)})
        
    })

    await controllerPromise.then((resolve) => res.send(resolve), (rej) => {console.log(rej)})
})

router.get('/insertMessage-:body', (req: Request, res: Response) => {
    console.log(req.params)
    insertMessage(dbContext, insertString(`${req.params.body}`))
}) 

router.get('/idToString', (req: Request, res: Response) => {
    queryConfit(dbContext, test)
})


export const DataController: Router = router

