import { Router, Request, Response } from 'express' 
import { getChannel, insertMessage, queryConfit } from '../database/pg'
import { appPool } from '../app'
import { insertString, selectString, test, } from '../queries/queries'
import { createRoute } from '../routes/routeDefinition'

const router: Router = Router()

router.get('/getChannel', (req: Request, res: Response) => {
    getChannel(appPool, selectString('channel'))
    res.send('test')
})

router.get('/getMessage', (req: Request, res: Response) => {
    getChannel(appPool, selectString('message'))
    res.send('message')
})

router.get('/insertMessage-:body', (req: Request, res: Response) => {
    console.log(req.params)
    insertMessage(appPool, insertString(`${req.params.body}`))
}) 

router.get('/idToString', (req: Request, res: Response) => {
    queryConfit(appPool, test)
})

createRoute(router, '/test', getChannel, selectString('channel'))
// createRoute(router, '/test', () => getChannel(appPool, selectString('message')) )


export const DataController: Router = router