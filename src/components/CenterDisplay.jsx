import LeaveReqForm from "./leaveReqForm"
// import {Grid} from '@mui/material'
import {Routes,Route} from "react-router-dom"
import Holidays from "./Holidays"
// import LoginPage from "./login/LoginPage"

export default function CenterDisplay(){
    return(
        <Routes>
            {/* <Route path="/" element={<LoginPage />} /> */}
            <Route path="/Employee/Dashboard" />
            <Route path="/Employee/LeaveRequest" element={<LeaveReqForm/>}/>
            <Route path="/Employee/History" />
            <Route path="/Employee/Holidays" element={<Holidays/>}/>
            <Route path="/Employee/Employees" />
        </Routes>
    )
}