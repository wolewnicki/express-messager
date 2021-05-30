import { dbContext } from "../../src/database/dbContext"
import { messageInsert, selectString } from "../../src/database/dbQueries"
import { getChannelPg, getEntity, pullPGPromiseVal } from "../../src/database/pg"
import { makeRepository } from '../../src/repository/makeRepository'
import { Message, Model, Repository } from "../../src/types/functions"

it('Message repository should send a message and get saved to the DB', async () => {
    const msgRepo: Repository<Message> = makeRepository<Message>(getEntity(pullPGPromiseVal(getChannelPg(dbContext, selectString('message')))), dbContext, messageInsert)
    const msgs = await msgRepo.getModel()
    const modelToSend = msgs[0]
    const time = new Date(Date.now())
    modelToSend.orgType.time_sent = time 
    msgRepo.sendModel(modelToSend)
    console.log('ran insert message')
    setTimeout( async () => {
        const msgsAfter = await msgRepo.getModel()
        expect<Partial<Model<Partial<Message>>>>(msgsAfter[msgsAfter.length - 1]).toBe({orgType: {time_sent: time}})
    }, 500)

})