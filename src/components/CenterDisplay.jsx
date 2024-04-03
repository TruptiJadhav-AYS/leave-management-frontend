import LeaveReqForm from "./leaveReqForm"
import {Routes,Route} from "react-router-dom"
import Holidays from "./Holidays"

export default function CenterDisplay(){
    return(
        <Routes>
            <Route path="/" />
            <Route path="/Dashboard" />
            <Route path="/LeaveRequest" element={<LeaveReqForm/>}/>
            <Route path="/History" />
            <Route path="/Holidays" element={<Holidays/>}/>
            <Route path="/Employees" />
        </Routes>
    )
}