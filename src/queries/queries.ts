
export const selectString = (table: string) => {
    return `SELECT * FROM ${table}`
}

export const insertString = (body: string) => {
    return `INSERT INTO message
    VALUES (
        1, 
        '${body}', 
        'nico',
        '2021-05-02',
        1
    )`
}