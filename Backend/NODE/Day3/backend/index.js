import http from http 
import dotenv from dotenv

dotenv.config()

const app = http.createrServer()
const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`created sucessfully `)
})