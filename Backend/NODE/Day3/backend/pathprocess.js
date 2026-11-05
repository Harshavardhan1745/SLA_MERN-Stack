import { notEqual } from 'assert'
import path from 'path'

const filepath = path.join(
    "server","backend","images","notEqual.txt"
)

console.log(filepath)

const file = "D:\SLA_Course\Backend\NODE\Day1\backend"

const takename = path.basename(file)

console.log(takename)