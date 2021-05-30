
export const messageInsertTest = {
    text:
    `
    INSERT INTO message
    VALUES (
    $1, 
    $2, 
    $3,
    $4,
    $5
);`
}

export const commit = {
    text: 'COMMIT;'
}

export const begin = {
    text: 'BEGIN;'
}

export const rollback = {
    text : 'ROLLBACK;'
}