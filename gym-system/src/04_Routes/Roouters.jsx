import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main_page from '../03_Pages/Main_page.jsx/01_Main_page'
import Fee_status from '../01_Components/Ui/Fee_status'
import Add_member from '../01_Components/Ui/Add_member'
import Attendence from '../01_Components/Ui/Attendence'

function Roouters() {
    return (
        <Routes>
            <Route path='/' element={<Main_page />} >
                <Route path='/FeeStatus' element={<Fee_status />} />
                <Route path='/AddMember' element={<Add_member />} />
                <Route path='/Attendence' element={<Attendence />} />
            </Route>
        </Routes>
    )
}

export default Roouters