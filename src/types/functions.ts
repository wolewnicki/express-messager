import { Pool, QueryConfig } from "pg";


export type PoolString = (pool: Pool, string: QueryConfig) => void