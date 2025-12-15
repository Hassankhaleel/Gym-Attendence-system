import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { setMemberShifts, setshiftWise_data } from '../../Redux/Setup';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
export default function Shifts_menu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [Shifts, setShifts] = React.useState("Morning");
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    // eslint-disable-next-line no-undef

    const dispatcher = useDispatch()
    const handleClose = (e) => {
        // console.log(e.currentTarget.getAttribute("value"));
        setAnchorEl(null);
        setShifts(e.currentTarget.getAttribute("value"))

    };
    const getdata = () => {
        //get data 
        axios.get(`http://localhost:2000/api/members/All/${shift}`)
            .then((res) => {
                console.log(res.data);

                dispatcher(setshiftWise_data(res.data))
            }).catch((err) => {
                console.log(err);

            })


    }
    React.useEffect(() => {

        dispatcher(setMemberShifts(Shifts))
        getdata()

    }, [handleClick])
    const shift = useSelector((state) => state.members_data.shift)
    console.log(shift);



    return (
        <div>
            <Button
                sx={{ color: "black", textAlign: "center", fontSize: "10px", marginTop: "5px", marginLeft: "10px", background: "white" }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {Shifts}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    list: {
                        'aria-labelledby': 'basic-button',
                    },
                }}
            >
                <MenuItem onClick={
                    handleClose
                } value="Morning" >Morning Shift</MenuItem>
                <MenuItem onClick={
                    handleClose
                } value="Evening">Evening Shift</MenuItem>
            </Menu>
        </div >
    );
}
