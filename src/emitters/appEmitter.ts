import events from 'events'
import { dbContext } from '../database/dbContext'
import { insertString } from '../database/dbQueries'
import { insertMessage } from '../database/pg'

export const emitter = new events.EventEmitter()

const handle = (body: any) => {
    const send = body.body
    insertMessage(dbContext, insertString(send))
}

emitter.on('test', handle) 

