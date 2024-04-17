import LeaveReqForm from "./leaveReqForm";
import { Routes, Route } from "react-router-dom";
import Holidays from "./Holidays";
import History from "./History";
import UseReponsive from "../hooks/UseResponsive";
import EmployeeList from "./Employee";
import Dashboard from "./Dashboard";
import ProjectOnboardForm from "./ProjectOnboardForm";
import ProjectList from "./ProjectList";
import EmloyeeDetailForm from "./EmloyeeDetailForm";
import InventoryForm from "./InventoryForm";
import EditProjectForm from "./EditProjectForm";
import EmployeeMobile from "./EmployeeMobile";
import HistoryMobile from "./HistoryMobile";
import InventoryList from "./InventoryList";
import ProjectMbList from "./ProjectMobileView";
import InventoryListMb from "./InventoryListMb";
import EmployeeDetails from "./EmployeeDetails";
import { useState } from "react";
// import { useSelector } from "react-redux";
import AddHolidayForm from "./AddHolidayForm"

export default function CenterDisplay() {
  let [addOrEditForm,setAddOrEditForm]=useState() 

  function onAddOrEdit(form){
    setAddOrEditForm(form)
  }

  let responsive = UseReponsive();
  return (
    <Routes>
      <Route path="/" element={<Dashboard  />} />
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
      <Route path="/Holidays/AddHoliday" element={<AddHolidayForm/>}/>
      <Route
        path="/Employees"
        element={responsive.isMobile ? <EmployeeMobile onAddOrEdit={onAddOrEdit}/> : <EmployeeList onAddOrEdit={onAddOrEdit}/>}
      />

      <Route path="/:id"
      element={<EmployeeDetails onAddOrEdit={onAddOrEdit}/>}
      />

      <Route
        path="/InventoryList"
        element={responsive.isMobile ? <InventoryListMb /> : <InventoryList />}
      />

      {/* <Route
        path="/Employees/NewRegistration"
        element={<EmployeeRegistrationForm />}
      /> */}
      <Route path="/Employees/EmployeeDetailsForm" element={<EmloyeeDetailForm addOrEditForm={addOrEditForm}/>} />
      <Route
        path="/Projects"
        element={responsive.isMobile ? <ProjectMbList /> : <ProjectList />}
      />
      <Route path="/Projects/OnboardProject" element={<ProjectOnboardForm />} />
      <Route path="/Projects/EditProject" element={<EditProjectForm/>}/>
      <Route path="/Inventory/AddInventory" element={<InventoryForm/>}/>
      <Route path="/Employees/NewRegistration/Inventory" element={<InventoryForm/>}/>
    </Routes>
  );
}
