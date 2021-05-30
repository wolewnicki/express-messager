import { Entity, Model } from "../types/functions";

export const entityToModel = <T> (entity: Entity<T>): Model<T> => {
    return {
        orgType: entity.orgType,
        name: 'model'
    }
}