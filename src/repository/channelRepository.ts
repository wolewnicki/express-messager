import { Pool } from "pg";
import { dbContext } from "../database/dbContext";
import { getChannelPg } from "../database/pg";
import { selectString } from "../database/dbQueries";
import { Channel, ChannelRepository, PGPromise } from "../types/functions";


const makeRepository = (channelPromise: PGPromise<Channel>): ChannelRepository => {
    return {
        async getChannel() {

            const test = await channelPromise.then(res => res.rows)
            return test
        }
    }
}

export const channelRepo = makeRepository(getChannelPg(dbContext, selectString('channel')))

