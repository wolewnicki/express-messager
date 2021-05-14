import { QueryConfig, QueryResult } from "pg"

export const selectString = (table: string): QueryConfig => {
    return {
    text:
        `SELECT * FROM ${table}`,
}
}

export const insertString = (body: string): QueryConfig => {
    return {
    text:
        `INSERT INTO message
        VALUES (
        1, 
        $1, 
        'nico',
        '2021-05-02',
        1
    )`,
    values: [body]
    }
}

export const test: QueryConfig = {
    text: 'SELECT id FROM message',
    types: {
        getTypeParser: () => (val: number) => {return val.toString()}
    }
}