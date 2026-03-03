import express from 'express'
import cors from 'cors'
import router from './routes/pranchasRouter.js'

const app = express()

export const port = 3000

app.use(cors())
app.use(express.json())

app.use(router)

app.get('/ping', (req, res) => {
    console.log("Alguém acessou o endpoint /ping. Ping!");
    res.send(200).send("Hello, World! Pong!")
})

export default app