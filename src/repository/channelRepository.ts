import { dbContext } from "../database/dbContext";
import { insertString, messageInsert, selectString } from "../database/dbQueries";
import { getChannelPg, getEntity, pullPGPromiseVal } from "../database/pg";
import { Channel, Repository } from "../types/functions";
import { makeRepository } from "./makeRepository";

export const channelRepository: Repository<Channel> = makeRepository<Channel>(getEntity(pullPGPromiseVal(getChannelPg(dbContext, selectString('channel')))), dbContext, messageInsert)