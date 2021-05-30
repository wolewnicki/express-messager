import { Pool, QueryConfig, QueryResult } from 'pg'
import { Channel, ChannelEntity, Entity, Named, PGPromise, Unit } from '../types/functions'
import { dbContext } from './dbContext'
import { selectString } from './dbQueries'


export const getChannelPg = (pool: Pool, string: QueryConfig) => {
    const p = pool.query<Channel>(string)
    return p
}

export const pullPGPromiseVal = async <T> (promise: PGPromise<T>) => {
    return promise.then(res => res.rows)
}

export const getEntity = async <T> (promise: Promise<T[]> ) => {
    const pRes = await promise
    const entities: Entity<T>[] = []
    pRes.map(x => entities.push({
        orgType: x,
        name: 'entity'
    }))
    return entities
}

export const getModel = async <T> (promise: Promise<Entity<T>[]>) => {
    const res = await promise.then(res => res)
    return res
}

getEntity(pullPGPromiseVal(getChannelPg(dbContext, selectString('channel')))).then(x => console.log(x))

export const insertMessage = (pool: Pool, insertString: QueryConfig ) => {
    pool.query(insertString, (err: Error, res: QueryResult<any>) => {
        console.log('test')
    })
}

export const queryConfit = (pool: Pool, query: QueryConfig) => {
    pool.query(query, (err: Error, res: QueryResult<any>) => {
        console.log('test')
    })
}


