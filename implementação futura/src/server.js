import app, { port } from './app.js'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 300
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${port}`);  
})