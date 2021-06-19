import { Pool, QueryConfig, QueryResult } from 'pg'
import { makeEntity } from '../entities/makeEntity'
import { Entity, PGPromise } from '../types/functions'
import { dbContext } from './dbContext'
import { queryBulder, selectChannel, whereId } from './dbQueries'


export const getChannelPg = <T> (pool: Pool, string: QueryConfig): PGPromise<T> => {
    const p = pool.query<T>(string)
    return p
}

export const pullPGPromiseVal = async <T> (promise: PGPromise<T>): Promise<T[]> => {
    return promise.then(res => res.rows)
}

export const getEntity = async <T> (promise: Promise<T[]> ): Promise<Entity<T>[]> => {
    const pRes = await promise
    const entities: Entity<T>[] = pRes.map(
        x => makeEntity(x)
    )
    return entities
}

export const makeDbProvider = (context: Pool) => {
    return {
        getPromise <T> (query: QueryConfig) {
        const p = context.query<T>(query)
        return p
        }
    }
}

const dbProvier = makeDbProvider(dbContext)

// getEntity(pullPGPromiseVal(getChannelPg(dbContext, selectString('channel')))).then(x => console.log(x))
// getEntity(pullPGPromiseVal(dbProvier.getPromise(selectChannel))).then(x => console.log(x))

getChannelPg(dbContext, queryBulder([2], [selectChannel, whereId]))
.then(res => console.log(res.rows))



export const insertMessage = (pool: Pool, insertString: QueryConfig ) => {
    pool.query(insertString, (err: Error, res: QueryResult<any>) => {
        console.log('recieved data')
        // console.log(insertString)
        // console.log(res)
    })
}

export const queryConfit = (pool: Pool, query: QueryConfig) => {
    pool.query(query, (err: Error, res: QueryResult<any>) => {
        console.log('test')
    })
}


