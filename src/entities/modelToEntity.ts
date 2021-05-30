import { Entity, Model } from "../types/functions";

export const modelToEntity = <T> (model: Model<T>): Entity<T> => {
    return {
        orgType: model.orgType,
        name: 'entity'
    }
}