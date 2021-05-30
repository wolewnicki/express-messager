import events from 'events'
import { Request } from 'express'
import { dbContext } from '../database/dbContext'
import { insertString } from '../database/dbQueries'
import { insertMessage } from '../database/pg'
import { Body } from '../types/functions'

export const emitter = new events.EventEmitter()

const handle = (body: any) => {
    const send = body.body
    insertMessage(dbContext, insertString(send))
    emitter.emit('finished')
}

emitter.on('send-msg', handle) 

export const sendMsg = async (msg: Body) => {
    insertMessage(dbContext, insertString(msg.body))
}
