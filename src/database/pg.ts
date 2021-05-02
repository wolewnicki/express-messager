import { Pool, QueryResult } from 'pg'

export const getChannel = (pool: Pool, selectString: string): void => { 
    pool.query(selectString, (err, res) => {
        console.log(err, res.rows)
})}

export const insertMessage = (pool: Pool, insertString: string ) => {
    pool.query(insertString, (err: Error, res: QueryResult<any>) => {
        console.log(err, res)
    })
}