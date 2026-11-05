import fs from 'fs'

fs.writeFile("index.js","This is node",()=>{
    console.log('sucessfully done')
})