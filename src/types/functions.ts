import { QueryResult } from "pg";

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
export type ChannelId = Id<'channel'>
export type MessageId = Id<'message'>

export type Entity<T> = Unit<T> & Named<'entity'>
export type Model<T> = Unit<T> & Named<'model'>

export type ChannelEntity = Entity<Channel>


export type Channel = {
    id : ChannelId
    created_by : string
    created_date : Date
    description : string
}

export type Message = {
    id : MessageId
    body: string
    sender: string
    time_sent: Date
    channel_id: ChannelId
}

export type PGPromise<T> = Promise<QueryResult<T>>

export type ChannelRepository = {
    getChannel() : Promise<Channel[]>
}

export type Repository<T> = {
    getModel(): Promise<Model<T>[]>
    sendModel(model: Model<T>): PGPromise<T> 
}


