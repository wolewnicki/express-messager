import { dbContext } from "../../src/database/dbContext"
import { messageInsert, selectString } from "../../src/database/dbQueries"
import { getChannelPg, getEntity, pullPGPromiseVal } from "../../src/database/pg"
import { makeRepository } from '../../src/repository/makeRepository'
import { Message, Model, Repository } from "../../src/types/functions"
import { confirmAllFields, getObjProps } from "../helpers/helpers"

it('Using the Entity function should convert to a message Model', async () => {
    const msgRepo: Repository<Message> = makeRepository<Message>(getEntity(pullPGPromiseVal(getChannelPg(dbContext, selectString('message')))), dbContext, messageInsert)
    const modelList = await msgRepo.getModel()
    const modelChecker = getObjProps<Model<Message>>({
        orgType: {
            id: {
                id: 44,
                name: 'message'
            },
            body: 'test',
            sender: 'nico',
            time_sent: new Date(Date.now()),
            channel_id: {
                id: 1,
                name: 'channel'
            }
        },
        name: 'model'
    })
    const res = modelList.map(x => confirmAllFields<Model<Message>>(x, modelChecker))
    console.log('ran get message model')
    res.map(x => expect(x).toBe(true))
})