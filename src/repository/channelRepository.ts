import { Pool } from "pg";
import { appPool } from "../app";
import { selectString } from "../queries/queries";
import { Channel, ChannelRepository, PGPromise } from "../types/functions";


export const makeRepository = (channelPromise: PGPromise<Channel>): ChannelRepository => {
    return {
        async getChannel() {

            const test = await channelPromise.then(res => res.rows)
            return test
        }
    }
}


