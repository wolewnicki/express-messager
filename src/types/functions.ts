import { Pool, QueryConfig, QueryResult } from "pg";

export type Unit<A> = 
{
    orgType : A
    name : string
}
export type Named<A extends string> = { name : A }

export type Id<A extends string> = {
    id : number
    name : A
}

export type Entity<T> = Unit<T> & Named<'entity'>

export type ChannelEntity = Entity<Channel>


export type Channel = {
    id : Id<'channel'>
    created_by : string
    created_date : Date
    description : string
}

export type PGPromise<T> = Promise<QueryResult<T>>

export type Test = () => Channel

export type ChannelRepository = {
    getChannel() : Promise<Channel[]>
}
export type Body = {
    body: string
}

