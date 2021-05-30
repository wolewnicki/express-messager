import { QueryConfig, QueryResult } from "pg"
import { getObjProps } from "../../spec/helpers/helpers"
import { Entity, Message } from "../types/functions"

export const selectString = (table: string): QueryConfig => {
    return {
    text:
        `SELECT * FROM ${table}`,
}
}

export const insertString = <T> ({orgType}: Entity<T>, text: {text : string}): QueryConfig => {
    const props = getObjProps(orgType)
    return {
    text: text.text,
    values: props.map(x => orgType[x])
    }
}

export const messageInsert = {
        text:
        `INSERT INTO message
        VALUES (
        $1, 
        $2, 
        $3,
        $4,
        $5
    )`
}



export const test: QueryConfig = {
    text: 'SELECT id FROM message',
    types: {
        getTypeParser: () => (val: number) => {return val.toString()}
    }
}