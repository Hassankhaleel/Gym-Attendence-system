import express, { Router } from "express"
import { add_memeber, get_members, paid_member, seracher, update_fee_status } from "./Controllers.js"
const Members_Routers = express.Router()
// / api / members
Members_Routers.get("/All/:shift", get_members)
Members_Routers.post("/Add", add_memeber)
Members_Routers.put("/update_fee_status", update_fee_status)
Members_Routers.get("/paid", paid_member)
Members_Routers.post("/Search", seracher)


export default Members_Routers