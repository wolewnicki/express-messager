import { Router, Request, Response } from 'express' 
import { getChannel, insertMessage, queryConfit } from '../database/pg'
import { appPool, emitter } from '../app'
import { insertString, selectString, test, } from '../queries/queries'
import { Channel, IData, Test } from '../types/functions'
import { createRoute } from '../routes/routeDefinition'

const router: Router = Router()

const message = {
    user : 'will',
    body : 'i am test'
}

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

