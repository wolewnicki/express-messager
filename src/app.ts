import express from 'express'

const app = express()
const port: number = 3000

app.get('/', (req, res) => {
    res.send('i am a test express app')
})
app.listen(port, ()  => {
    console.log(`server is listening on ${port}`)
})