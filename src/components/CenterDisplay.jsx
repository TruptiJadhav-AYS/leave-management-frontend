import LeaveReqForm from "./leaveReqForm";
import { Routes, Route } from "react-router-dom";
import Holidays from "./Holidays";
import History from "./History";
import UseReponsive from "../hooks/UseResponsive";
import EmployeeList from "./Employee";
import Dashboard from "./Dashboard";
import ProjectOnboardForm from "./ProjectForm";
import ProjectList from "./ProjectList";
import EmloyeeDetailForm from "./EmloyeeForm";
import InventoryForm from "./InventoryForm";
import EmployeeMobile from "./EmployeeMobile";
import HistoryMobile from "./HistoryMobile";
import InventoryList from "./InventoryList";
import ProjectMbList from "./ProjectMobileView";
import InventoryListMb from "./InventoryListMb";
import EmployeeDetails from "./EmployeeDetails";
import { useState } from "react";
import AddHolidayForm from "./AddHolidayForm";
import ProjectDetails from "./ProjectDetails";

export default function CenterDisplay() {
  let [addOrEditForm, setAddOrEditForm] = useState();
  let [projectAddOrEdit, setProjectAddOrEdit] = useState();

  function onProjectAddOrEdit(form) {
    setProjectAddOrEdit(form);
  }

  function onAddOrEdit(form) {
    setAddOrEditForm(form);
  }

  let responsive = UseReponsive();
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
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
      <Route path="/Holidays/AddHoliday" element={<AddHolidayForm />} />
      <Route
        path="/Employees"
        element={
          responsive.isMobile ? (
            <EmployeeMobile onAddOrEdit={onAddOrEdit} />
          ) : (
            <EmployeeList onAddOrEdit={onAddOrEdit} />
          )
        }
      />

      <Route
        path="/:id"
        element={<EmployeeDetails onAddOrEdit={onAddOrEdit} />}
      />

      <Route
        path="/InventoryList"
        element={responsive.isMobile ? <InventoryListMb /> : <InventoryList />}
      />
      <Route
        path="/Employees/EmployeeDetailsForm"
        element={<EmloyeeDetailForm addOrEditForm={addOrEditForm} />}
      />
      <Route
        path="/Projects"
        element={
          responsive.isMobile ? (
            <ProjectMbList onProjectAddOrEdit={onProjectAddOrEdit} />
          ) : (
            <ProjectList onProjectAddOrEdit={onProjectAddOrEdit} />
          )
        }
      />
      <Route
        path="/Projects/OnboardProject"
        element={<ProjectOnboardForm projectAddOrEdit={projectAddOrEdit} />}
      />
      <Route path="/Inventory/AddInventory" element={<InventoryForm />} />
      <Route
        path="/Employees/NewRegistration/Inventory"
        element={<InventoryForm />}
      />
      <Route
        path="Projects/:Id"
        element={<ProjectDetails onProjectAddOrEdit={onProjectAddOrEdit} />}
      />
    </Routes>
  );
}
