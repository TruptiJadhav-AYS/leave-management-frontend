import LeaveReqForm from "./leaveReqForm";
import { Routes, Route } from "react-router-dom";
import Holidays from "./Holidays";
import History from "./History";

import EmployeeList from "./Employee";
import UserRegistrationForm from "./UserRegistrationForm";
import Dashboard from "./Dashboard";

export default function CenterDisplay({ role }) {
  return (
    <Routes>
      <Route path="/" element={<Dashboard role={role} />} />
      <Route path="/ApplyLeave" element={<LeaveReqForm />} />
      <Route path="/History" element={<History />} />
      <Route path="/Holidays" element={<Holidays />} />
      <Route path="/Employees" element={<EmployeeList />} />
      <Route
        path="/Employees/NewRegistration"
        element={<UserRegistrationForm />}
      />
    </Routes>
  );
}
