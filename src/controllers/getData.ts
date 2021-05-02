import { Router, Request, Response } from 'express' 
import { getChannel, insertMessage } from '../database/pg'
import { appPool } from '../app'
import { insertString, selectString } from '../queries/queries'

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

export const DataController: Router = router