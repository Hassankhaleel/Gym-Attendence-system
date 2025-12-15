import mongoose from "mongoose"
import member_model_schema from "./Schemas.js"

// get member by shift type via get
const get_members = async (req, res) => {
    const shift = req.params.shift
    console.log(shift, "params wala");

    const data = await member_model_schema.find({ Shift: shift })
    res.send(data)
}
// add member via post
const add_memeber = async (req, res) => {
    // const { Name, Phone, Age, AdmissionDate, FeeStatus, Shift, Gender } = req.body
    const new_member = req.body.formData;
    console.log(new_member);

    try {
        const add_new_memeber = new member_model_schema(new_member)
        const added = await add_new_memeber.save()
        res.send({ "member added": added })
    } catch (err) {
        res.send(err)
    }

}

// get paid fee member via get
const paid_member = async (req, res) => {
    const shift = req.body.Shift//getting via shift base
    const member_fee_status = await member_model_schema.find({})
    res.semd(member_fee_status)
}
// update fee status via put
const update_fee_status = async (req, res) => {
    const member_id = req.body._id;
    const updater = await member_model_schema.findByIdAndUpdate(member_id, { FeeStatus: true }, { new: true })
    res.send(updater)
}
//
//
const update_attendence = async (req, res) => {
    const id = req.body._id;
    // const attendece_updater = findByIdAndUpdate({ id,{ Attendence: Attendence + 1 })
    // res.send(attendece_updater)
}

const seracher = async (req, res) => {

    const seracher = req.body.SerachBy
    console.log(seracher);
    const finded = await member_model_schema.find({ Name: seracher })
    res.send(finded)

}
//  get access from meber expect with member admiison datae
// count days with member amdission day base on this do attendece




export { get_members, add_memeber, paid_member, update_fee_status, seracher }