import { dbContext } from "../../src/database/dbContext"
import { messageInsert, selectString } from "../../src/database/dbQueries"
import { getChannelPg, getEntity, pullPGPromiseVal } from "../../src/database/pg"
import { makeRepository } from '../../src/repository/makeRepository'
import { Channel, Model } from "../../src/types/functions"
import { confirmAllFields, getObjProps } from "../helpers/helpers"

it('Using the Entity function should convert to a Model', async () => {
    const chanRepo = makeRepository<Channel>(getEntity(pullPGPromiseVal(getChannelPg(dbContext, selectString('channel')))), dbContext, messageInsert)
    const modelList = await chanRepo.getModel()
    const modelChecker = getObjProps<Model<Channel>>({
        orgType: {
            id: {
                id: 44,
                name: 'channel'
            },
            created_by: 'nico',
            created_date: new Date(Date.now()),
            description: 'test description'
        },
        name: 'model'
    })
    const res = modelList.map(x => confirmAllFields<Model<Channel>>(x, modelChecker))
    console.log('ran get channel model')
    res.map(x => expect(x).toBe(true))
})