import { Pool, QueryConfig, QueryResult } from 'pg'
import { Channel } from '../types/functions'


export const getChannelPg = (pool: Pool, string: QueryConfig) => {
    const p = pool.query<Channel>(string)
    return p
}

export const insertMessage = (pool: Pool, insertString: QueryConfig ) => {
    pool.query(insertString, (err: Error, res: QueryResult<any>) => {
    })
}

export const queryConfit = (pool: Pool, query: QueryConfig) => {
    pool.query(query, (err: Error, res: QueryResult<any>) => {
    })
}

// const queryPool = (pool: Pool, selectString: QueryConfig) => { pool.query(selectString, (err: Error, res: QueryResult<Channel>) => {
//     emitter.emit('workDone', res.rows)
// })}


