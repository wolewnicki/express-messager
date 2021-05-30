import { dbContext } from '../src/database/dbContext'
import { selectString, test } from '../src/database/dbQueries'
import { getChannelPg, getModel, pullPGPromiseVal, getEntity } from '../src/database/pg'
import { Channel, ChannelEntity, Entity } from '../src/types/functions'

it('Should deliver a complete Channel Entity', async () => {
    const testChannelEntity = await getEntity(pullPGPromiseVal(getChannelPg(dbContext, selectString('channel'))))
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
    res.map(x => expect(x).toBe(true))
})

afterAll(() => {console.log('All Passed')})

const confirmAllFields = <T> (obj: T, propCheck: Extract<keyof T, string>[]) => {
    let bools: boolean[] = []
    propCheck.map(x => bools.push(obj[x] !== undefined))
    return bools.every(item => item == true)
}
const getObjProps = <T> (obj: T): Extract<keyof T, string>[] => {
    let props: Extract<keyof T, string>[] = []
    for (const prop in obj) {
        props.push(prop)
    }
    return props
}