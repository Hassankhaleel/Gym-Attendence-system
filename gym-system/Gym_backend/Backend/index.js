import express from "express"
import cors from 'cors'
import connectDB from "./Database.js";
// import { get_members } from "./Controllers.js";
import Members_Routers from "./Routes.js";
const app = express()

connectDB();
app.use(cors({
    origin: "*",
    credentials: true,

}))
app.use(express.json())
app.use('/api/members', Members_Routers)
app.listen(2000, () => {
    console.log("ports is running 2000");

})
