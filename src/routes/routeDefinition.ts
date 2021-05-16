import { Request, Response, Router } from "express"
import { Pool, QueryConfig, QueryResult } from "pg"
import { PoolString } from "../types/functions"
import { appPool } from '../app'

// export const createRoute = (router: Router, route: string, func: PoolString, selectString: QueryConfig  ) => {
//     router.get(route, (req: Request, res: Response) => {
//         func(appPool, selectString)
//         console.log(`ran ${route}`)
//     })
// }

export const createRoute = <T> (router: Router, route: string, data: T  ) => {
    router.get(route, (req: Request, res: Response) => {
        res.send(data)
    })
}
