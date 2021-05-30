import { Pool } from "pg";
import { dbContext } from "../database/dbContext";
import { getChannelPg } from "../database/pg";
import { selectString } from "../database/dbQueries";
import { Channel, ChannelEntity, ChannelRepository, PGPromise } from "../types/functions";


const makeRepository = (channelPromise: PGPromise<Channel>): ChannelRepository => {
    return {
        async getChannel() {

            const channel = await channelPromise.then(res => res.rows)
            return channel
        }
    }
}

// export const channelRepo = makeRepository(getChannelPg(dbContext, selectString('channel')))

