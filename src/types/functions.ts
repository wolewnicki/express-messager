import { Pool, QueryConfig, QueryResult } from "pg";


export type PoolString = (pool: Pool, string: QueryConfig) => void

export type Unit<A> = 
{
    orgType : A
    name : string
}
export type Named<A extends string> = { name : A }



export type ChannelEntity = Unit<Channel> & Named<'entity'>


export type Channel = {
    id : number
    created_by : string
    created_date : Date
    description : string
}

export type PGPromise<T> = Promise<QueryResult<T>>

export type Test = () => Channel

export type ChannelRepository = {
    getChannel() : Promise<Channel[]>
}


