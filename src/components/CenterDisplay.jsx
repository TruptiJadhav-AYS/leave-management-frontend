import LeaveReqForm from "./leaveReqForm";
import { Routes, Route } from "react-router-dom";
import Holidays from "./Holidays";
import History from "./History";
import UseReponsive from "../hooks/UseResponsive";
import EmployeeList from "./Employee";
import EmployeeRegistrationForm from "./EmployeeRegistrationForm";
import Dashboard from "./Dashboard";
import ProjectOnboardForm from "./ProjectOnboardForm";
import ProjectList from "./ProjectList";
import EditEmployeeForm from "./EditEmployeeForm";
import InventoryForm from "./InventoryForm";
import EditProjectForm from "./EditProjectForm";
import EmployeeMobile from "./EmployeeMobile";
import HistoryMobile from "./HistoryMobile";
import InventoryList from "./InventoryList";
import ProjectMbList from "./ProjectMobileView";
import InventoryListMb from "./InventoryListMb";

export default function CenterDisplay({ role }) {
  let responsive = UseReponsive();
  return (
    <Routes>
      <Route path="/" element={<Dashboard role={role} />} />
      <Route path="/ApplyLeave" element={<LeaveReqForm />} />
      <Route
        path="/History"
        element={
          responsive.isDesktop || responsive.isLaptop || responsive.isTablet ? (
            <History />
          ) : (
            <HistoryMobile />
          )
        }
      />
      <Route path="/Holidays" element={<Holidays />} />
      <Route
        path="/Employees"
        element={responsive.isMobile ? <EmployeeMobile /> : <EmployeeList />}
      />

      <Route
        path="/InventoryList"
        element={responsive.isMobile ? <InventoryListMb /> : <InventoryList />}
      />

      <Route
        path="/Employees/NewRegistration"
        element={<EmployeeRegistrationForm />}
      />
      <Route path="/Employees/EditEmployee" element={<EditEmployeeForm />} />
      <Route
        path="/Projects"
        element={responsive.isMobile ? <ProjectMbList /> : <ProjectList />}
      />
      <Route path="/Projects/OnboardProject" element={<ProjectOnboardForm />} />
      <Route path="/Projects/EditProject" element={<EditProjectForm />} />
      <Route path="/Employees/EditForm/Inventory" element={<InventoryForm />} />
    </Routes>
  );
}
