    import { log } from "console"
import http from "http"

console.log(http)

const app = http.createServer()

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server is Running on http://localhost:${PORT}`)
})