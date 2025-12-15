import mongoose from "mongoose";

const member_model = new mongoose.Schema({
    Name: String,
    Phone: Number,
    Age: Number,
    Admission_date: String,
    FeeStatus: String,
    Shift: String,
    Gender: String,
    Attendence: {
        Status: Boolean,
        active: Number
    }
})
const member_model_schema = mongoose.model("members", member_model)
export default member_model_schema;