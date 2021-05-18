import { Request, Response, Router } from "express"
import { Events, Pool, QueryConfig, QueryResult } from "pg"
import { Channel, PoolString } from "../types/functions"
import { appPool, emitter } from '../app'

// export const createRoute = (router: Router, route: string, func: PoolString, selectString: QueryConfig  ) => {
//     router.get(route, (req: Request, res: Response) => {
//         func(appPool, selectString)
//         console.log(`ran ${route}`)
//     })
// }

// export const createRoute = <T> (router: Router, route: string, data: T  ) => {
//     router.get(route, (req: Request, res: Response) => {
//         res.send(data)
//     })
// }

export const createRoute  = (router: Router, route: string, channel: Channel) => {
    router.get(route, (req: Request, res: Response) => {
        emitter.emit('event')
        emitter.once('workDone', (data: Channel) => res.send(data))
    })
}
