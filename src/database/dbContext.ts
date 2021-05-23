import { Pool } from "pg"
require('dotenv').config()

export const dbContext = new Pool()