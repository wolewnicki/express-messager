import { Entity } from "../types/functions";

export const makeEntity = <T> (obj: T): Entity<T> => {
    return {
        orgType: obj,
        name: 'entity'
    }
}