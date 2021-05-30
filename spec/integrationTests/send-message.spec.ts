import { dbContext } from "../../src/database/dbContext"
import { messageInsert, selectString } from "../../src/database/dbQueries"
import { getChannelPg, getEntity, insertMessage, pullPGPromiseVal } from "../../src/database/pg"
import { makeRepository } from '../../src/repository/makeRepository'
import { Message, Model, Repository } from "../../src/types/functions"
import { begin, commit, messageInsertTest, rollback } from "../helpers/testInserts"

it('Message repository should Send a valid command with name Insert', async () => {
    const msgRepo: Repository<Message> = makeRepository<Message>(getEntity(pullPGPromiseVal(getChannelPg(dbContext, selectString('message')))), dbContext, messageInsertTest)
    const msgs = await msgRepo.getModel()
    const modelToSend = msgs[0]
    const time = new Date(Date.now())
    modelToSend.orgType.time_sent = time 
    await getChannelPg(dbContext, begin)
    await msgRepo.sendModel(modelToSend)
        .then(res => res.command)
        .then(command => expect(command).toBe('INSERT'))
        .finally(() => insertMessage(dbContext, rollback))

})