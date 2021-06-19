import express, { Request, Response, Router } from 'express'
import { Events, Pool, QueryResult } from 'pg'
import { DataController } from './controllers/getData'
import cors from 'cors'
import { config } from 'dotenv'
import { verify } from './services/authService'
import { AuthController } from './controllers/authController'

config()

// verify()
//    .then(res => console.log(res))
//    .catch(console.error)

console.log('test 123')
const app: express.Application = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(Router())
app.use('/v1', DataController)
app.use('/v1', AuthController)


app.get('/1', (req: Request, res: Response) => {
    res.status(200).json({message: 'first express api!!'})
})
app.listen(port, ()  => {
    console.log(`server is listening on ${port}`)
})


