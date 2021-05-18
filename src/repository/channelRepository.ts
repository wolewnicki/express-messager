import { Pool } from "pg";
import { appPool } from "../app";

export const getChannelRepository = async (pool : Pool) => {
    const res = await getChannel
    return res.rows
}


const getChannel = appPool.query('SELECT * FROM channel')
const test = async () => await getChannel