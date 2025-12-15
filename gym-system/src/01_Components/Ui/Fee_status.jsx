import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
// import top100Films from './top100Films';
import { useSelector } from 'react-redux';
import { Autocomplete, Button } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Fee_status() {
    const [query, setQuery] = React.useState("");
    console.log(query);


    const [members_data, setmember_Data] = React.useState()
    const shift_WiseData = useSelector((state) => state.members_data.shift_WiseData)
    console.log(shift_WiseData);
    const handleSearch = () => {
        axios.post('http://localhost:2000/api/members/Search',
            {
                SerachBy: query
            })
            .then((res) => {
                console.log(res.data)
            }).catch((err) => console.log(err)
            )
    };

    const Pending = shift_WiseData.filter((data) => data.FeeStatus === "Pending").length
    const Paid = shift_WiseData.filter((data) => data.FeeStatus === "Unpaid").length
    const Unpaid = shift_WiseData.filter((data) => data.FeeStatus === "Paid").length
    return (
        <TableContainer component={Paper} sx={{ minWidth: 400, height: 700 }} >


            <Button>Paid Members: {Paid} |</Button>
            <Button>UnPaid Members: {Unpaid} |</Button>
            <Button>Pending Members: {Pending} |</Button>



            <Table aria-label="simple table">

                <Box sx={{ margin: "10px" }} display="flex" gap={2} alignItems="center">
                    <TextField
                        label="Search Member"
                        variant="outlined"
                        size="small"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Button variant="contained" onClick={handleSearch}>
                        Search
                    </Button>
                </Box>
                <TableHead sx={{ backgroundColor: "#ffe500" }}>
                    <TableRow >
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Admission Date(g)</TableCell>
                        <TableCell align="right">Fee Status</TableCell>
                        <TableCell align="right">Shift</TableCell>
                        <TableCell align="right">Pay fee</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {shift_WiseData.map((row) => (


                        <TableRow
                            key={row.Name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, margin: "10px" }}
                        >
                            <TableCell component="th" scope="row">
                                {row.Name}
                            </TableCell>
                            <TableCell align="right">{row.Phone}</TableCell>
                            <TableCell align="right">{row.Admission_date}</TableCell>
                            <TableCell align="right">{row.FeeStatus}</TableCell>
                            <TableCell align="right">{row.Shift}</TableCell>
                            <TableCell align="center" sx={{
                                backgroundColor: row.FeeStatus == "Unpaid" ? "#c10000" : row.FeeStatus == "paid" ? "#2db700" : "#ffcc00",
                                pointerEvents: "none",
                                font: "bold1",
                                cursor: "pointer",
                                color: 'white'
                            }}
                            >
                                Mark Paid
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
