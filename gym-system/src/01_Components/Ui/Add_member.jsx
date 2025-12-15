import React, { useState } from "react";
import axios from 'axios'
import {
    Box,
    TextField,
    Button,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Typography,
    Paper,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";


export default function Add_member() {
    const dispatcher = useDispatch()
    const [formData, setFormData] = useState({
        Name: "",
        Phone: "",
        Age: "",
        Admission_date: "",
        FeeStatus: "",
        Shift: "",
        Gender: "",
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({ ...prev, [name]: type == "number" ? Number(value) : value }));
    };
    const shift = useSelector((state) => state.members_data.shift)
    console.log(shift);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted ✅", formData);
        // Here you can call your backend API with formData
    };

    const form_data = () => {
        try {
            axios.post('http://localhost:2000/api/members/Add', {
                formData
            }).then((res) => console.log(res))
                .catch((err) => console.log(err))
        } catch (err) {
            console.log(err)

        }
    }

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                mt: 4,
            }}
        >
            <Paper elevation={3} sx={{
                p: 4, width: "400px", borderRadius: 3, backgroundColor: "#FFE500", font: "bold"
            }}>
                <Typography variant="h5" gutterBottom>
                    Add New Member
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Name"
                        name="Name"
                        value={formData.Name}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="WhatsApp Number"
                        name="Phone"
                        type="number"
                        value={formData.Phone}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Age"
                        name="Age"
                        type="number"
                        value={formData.Age}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Admission Date"
                        name="Admission_date"
                        type="date"
                        value={formData.Admission_date}
                        onChange={handleChange}
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                        required
                    />

                    {/* Fee Status Dropdown */}
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Fee Status</InputLabel>
                        <Select
                            name="FeeStatus"
                            value={formData.FeeStatus}
                            onChange={handleChange}
                            required
                        >
                            <MenuItem value="Paid">Paid</MenuItem>
                            <MenuItem value="Unpaid">Unpaid</MenuItem>
                            <MenuItem value="Pending">Pending</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Shift Dropdown */}
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Shift</InputLabel>
                        <Select
                            name="Shift"
                            value={formData.Shift}
                            onChange={handleChange}
                            required
                        >
                            <MenuItem value="Morning">Morning</MenuItem>
                            <MenuItem value="Evening">Evening</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Gender Dropdown */}
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Gender</InputLabel>
                        <Select
                            name="Gender"
                            value={formData.Gender}
                            onChange={handleChange}
                            required
                        >
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                    </FormControl>

                    <Button
                        onClick={() => form_data()}
                        fullWidth
                        type="submit"
                        variant="contained"
                        sx={{ mt: 2, borderRadius: 2, backgroundColor: "black" }}
                    >Add Member
                    </Button>
                </form>
            </Paper>
        </Box>
    );
}
