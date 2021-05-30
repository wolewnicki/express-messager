import { QueryConfig, QueryResult } from "pg"
import { getObjProps } from "../../spec/helpers/helpers"
import { Entity, Message } from "../types/functions"

export const selectString = (table: string): QueryConfig => {
    return {
    text:
        `SELECT * FROM ${table}`,
    }
}

export const queryBulder = (updates: any, args: {text: string}[]): QueryConfig => {
    let combinedText = ``
    args.map(x => combinedText = combinedText + x.text)
    return {
        text: combinedText,
        values: [...updates]
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

export const selectChannel = {
    text: 
    `
        SELECT * FROM channel
    `
}

export const whereId = {
    text:
    `
        WHERE id = $1
    `
}

// console.log(selectChannel.text + whereId.text)


export const test: QueryConfig = {
    text: 'SELECT id FROM message',
    types: {
        getTypeParser: () => (val: number) => {return val.toString()}
    }
}