import { Pool } from "pg";
import { insertString } from "../database/dbQueries";
import { insertMessage } from "../database/pg";
import { modelToEntity } from "../entities/modelToEntity";
import { Entity, Model, Repository } from "../types/functions";

export const makeRepository = <T> (promise: Promise<Entity<T>[]>, dbContext: Pool, insertQuery: {text : string}): Repository<T> => {
    return {
        async getModel(): Promise<Model<T>[]> {
            const pRes = await promise.then(res => res)
            const modelList: Model<T>[] = []
            pRes.map(x => modelList.push({
                orgType: x.orgType,
                name: 'model'
            }))
            return modelList
        },
        sendModel(model : Model<T>) {
            const entity = modelToEntity(model)
            insertMessage(dbContext, insertString(entity, insertQuery))
        }
    }
}
