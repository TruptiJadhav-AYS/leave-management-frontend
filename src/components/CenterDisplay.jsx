import LeaveReqForm from "./leaveReqForm";
import { Routes, Route } from "react-router-dom";
import Holidays from "./Holidays";
import History from "./History";
import UseReponsive from "../hooks/UseResponsive";
import EmployeeList from "./Employee";
import EmployeeRegistrationForm from "./EmployeeRegistrationForm";
import Dashboard from "./Dashboard";
import EmployeeMobile from "./EmployeeMobile";
import HistoryMobile from "./HistoryMobile";

export default function CenterDisplay({ role }) {
  let responsive=UseReponsive()
  return (
    <Routes>
      <Route path="/" element={<Dashboard role={role} />} />
      <Route path="/ApplyLeave" element={<LeaveReqForm />} />
      <Route path="/History" element={responsive.isDesktop||responsive.isLaptop||responsive.isTablet ? <History /> :<HistoryMobile/>} />
      <Route path="/Holidays" element={<Holidays />} />
      <Route
          path="/Employees"
          element={responsive.isMobile ? <EmployeeMobile /> : <EmployeeList />}
        />
      
      <Route
        path="/Employees/NewRegistration"
        element={<EmployeeRegistrationForm />}
      />
    </Routes>
  );
}
