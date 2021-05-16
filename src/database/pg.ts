import { Pool, QueryConfig, QueryResult } from 'pg'
import { emitter } from '../app'
import { Channel } from '../types/functions'

// export const getChannel = (pool: Pool, selectString: QueryConfig): void => { 
//     pool.query(selectString, (err, res) => {
//         console.log(err, res.rows)
//         console.log(selectString.values)
// })}

export const getChannel = (pool: Pool, selectString: QueryConfig): void => {
    queryPool(pool, selectString)
}

export const insertMessage = (pool: Pool, insertString: QueryConfig ) => {
    pool.query(insertString, (err: Error, res: QueryResult<any>) => {
        console.log(err, res)
        console.log(insertString)
    })
}

export const queryConfit = (pool: Pool, query: QueryConfig) => {
    pool.query(query, (err: Error, res: QueryResult<any>) => {
        console.log(err, res.rows)
        console.log(query)
    })
}

const queryPool = (pool: Pool, selectString: QueryConfig) => { pool.query(selectString, (err: Error, res: QueryResult<Channel>) => {
    emitter.emit('pg', res.rows)
})}


