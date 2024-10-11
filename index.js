const express=require("express")
const app=express()
require('dotenv').config();
const bodyparser=require("body-parser")
const cors=require("cors")
app.use(cors({origin:"https://demointegrationforlyros.netlify.app",credentials:true}))
app.use(bodyparser.json())

const contactsRoute=require("./route/contactManagerFinal")
const credRoutes=require("./route/credentialsRoute")

app.use(credRoutes)
// app.use(contactsRoute)

app.listen(process.env.PORT,()=>console.log("server has started"))