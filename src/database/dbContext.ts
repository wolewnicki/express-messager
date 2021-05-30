import { Pool } from "pg"
import dotenv from 'dotenv'

dotenv.config()

export const dbContext = new Pool()