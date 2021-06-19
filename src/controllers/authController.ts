import { Router } from "express";
import { verify } from "../services/authService";

const router: Router = Router()

router.post('/auth', async (req, res) => {
    const token = req.headers.authorization as string
    const replc = token.replace('Bearer ', '')
    console.log(replc)
    verify(replc)
       .then(res => console.log(res))
       .catch(console.error)
       .finally(() => res.send('success'))
    console.log('ran auth')
})

export const AuthController: Router = router