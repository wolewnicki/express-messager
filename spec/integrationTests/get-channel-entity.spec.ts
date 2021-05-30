import { dbContext } from '../../src/database/dbContext'
import { selectString } from '../../src/database/dbQueries'
import { getChannelPg, pullPGPromiseVal, getEntity } from '../../src/database/pg'
import { Channel, ChannelEntity, Entity } from '../../src/types/functions'
import { confirmAllFields, getObjProps } from '../helpers/helpers'

it('Should deliver a complete Channel Entity using PG', async () => {
    const testChannelEntity: Entity<Channel>[] = await getEntity(pullPGPromiseVal(getChannelPg(dbContext, selectString('channel'))))
    const properChannelEntity = getObjProps<Entity<Channel>>({
        orgType: {
            id: {
                id: 23,
                name: 'channel'
            },
            created_by: 'will',
            created_date: new Date(Date.now()),
            description: 'test desc'
        },
        name: 'entity'
    })
    const res = testChannelEntity.map(x => confirmAllFields<ChannelEntity>(x, properChannelEntity))
    console.log('ran get channel entity')
    res.map(x => expect(x).toBe(true))
})