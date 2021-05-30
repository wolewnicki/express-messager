
export const confirmAllFields = <T> (obj: T, propCheck: Extract<keyof T, string>[]): boolean => {
    const bools: boolean[] = []
    propCheck.map(x => bools.push(obj[x] !== undefined))
    return bools.every(item => item == true)
}

export const getObjProps = <T> (obj: T): Extract<keyof T, string>[] => {
    const props: Extract<keyof T, string>[] = []
    for (const prop in obj) {
        props.push(prop)
    }
    return props
}