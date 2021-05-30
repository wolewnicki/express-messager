import { Router } from 'express' 
import { Repository } from '../types/functions'
import { channelRepository } from '../repository/channelRepository'

const router: Router = Router()


const makeRoute = <T> (router: Router, route: string, {getModel}: Repository<T> ) => {
    router.get(route, async (req, res) => {
            res.send(await getModel())
    })
}

router.get('/channel/:id?', async (req, res) => {
    const id = req.params.id
    if (id) {
        res.send(req.params.id)
    } else {
        res.send(await channelRepository.getModel())
    }
})

makeRoute(router, '/getChannel', channelRepository)

// makeRoute(router, '/getChannel', channelRepo.getChannel())

// router.post('/test', async (req: Request<ParamsDictionary, any, Body>, res) => {

//     const controllerPromise = new Promise<string>( (resolve, rej) => {
//         const resolvefunc = async () => { 
//             sendMsg(req.body)
//             resolve('Resolved!')
//         }
//         resolvefunc()
//         .then(resu => res.send('passed'))
//         .catch((err) => {rej(err) 
//         res.send(`failed because: ${err}`)})
        
//     })

//     await controllerPromise.then((resolve) => res.send(resolve), (rej) => {console.log(rej)})
// })

// router.get('/insertMessage-:body', (req: Request, res: Response) => {
//     console.log(req.params)
//     insertMessage(dbContext, insertString(`${req.params.body}`))
// }) 

// router.get('/idToString', (req: Request, res: Response) => {
//     queryConfit(dbContext, test)
// })


export const DataController: Router = router

