import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config()
const app = express()
const port = process.env.port || 8000

// database connection
const connect = async()=>{
    try{

    } catch (err) {

    }
}

//midleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())


//for testing
app.get("/",(req,res) =>{
    res.send('api is working')
})

app.listen(port, () => {
    console.log('server listening on port', port)
})