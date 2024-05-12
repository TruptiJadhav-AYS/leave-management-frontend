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
import ViewProfile from "./ViewProfile";
import PendingReq from "./PendingReq";
import PendingReqMobile from "./PendingReqMobile";

export default function CenterDisplay({ logedInUser }) {
  let [addOrEditForm, setAddOrEditForm] = useState();
  let [projectAddOrEdit, setProjectAddOrEdit] = useState();
  let [selectedEmpId, setSelectedEmpId] = useState(null);
  let [openDeleteDialouge, setOpenDeleteDialouge] = useState(false);
  console.log(logedInUser)

  function onProjectAddOrEdit(form) {
    setProjectAddOrEdit(form);
  }

  function onAddOrEdit(form) {
    setAddOrEditForm(form);
  }

  function handleSelectedEmp(id) {
    setSelectedEmpId(id);
  }
  function onOpenDeleteDialogue() {
    setOpenDeleteDialouge(true);
  }
  function onCloseDeleteDialogue() {
    setOpenDeleteDialouge(false);
  }

  let responsive = UseReponsive();
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route
        path="/PendingRequest"
        element={responsive.isMobile ? <PendingReqMobile /> : <PendingReq />}
      />
      <Route path="/ApplyLeave" element={<LeaveReqForm />} />
      <Route
        path="/History"
        element={
          responsive.isDesktop || responsive.isLaptop || responsive.isTablet ? (
            <History/>
          ) : (
            <HistoryMobile />
          )
        }
      />
      <Route path="/Holidays" element={<Holidays/>} />
      <Route path="/Holidays/AddHoliday" element={<AddHolidayForm/>} />
      <Route
        path="/Employees"
        element={
          responsive.isMobile ? (
            <EmployeeMobile onAddOrEdit={onAddOrEdit} />
          ) : (
            <EmployeeList
              onAddOrEdit={onAddOrEdit}
              handleSelectedEmp={handleSelectedEmp}
            />
          )
        }
      />

      <Route
        path="/:id"
        element={
          <EmployeeDetails
            onAddOrEdit={onAddOrEdit}
            selectedEmpId={selectedEmpId}
            addOrEditForm={addOrEditForm}
            openDeleteDialouge={openDeleteDialouge}
            onOpenDeleteDialogue={onOpenDeleteDialogue}
            onCloseDeleteDialogue={onCloseDeleteDialogue}
          />
        }
      />

      <Route
        path="/InventoryList"
        element={
          responsive.isMobile ? (
            <InventoryListMb
              openDeleteDialouge={openDeleteDialouge}
              onOpenDeleteDialogue={onOpenDeleteDialogue}
              onCloseDeleteDialogue={onCloseDeleteDialogue}
            />
          ) : (
            <InventoryList
              openDeleteDialouge={openDeleteDialouge}
              onOpenDeleteDialogue={onOpenDeleteDialogue}
              onCloseDeleteDialogue={onCloseDeleteDialogue}
            />
          )
        }
      />
      <Route
        path="/Employees/EmployeeDetailsForm"
        element={
          <EmloyeeDetailForm addOrEditForm={addOrEditForm}/>
        }
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

      <Route path="/Profile" element={ <ViewProfile/>} />
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
      {/* <Route path="/Profile" element={<ViewProfile/>}/> */}
    </Routes>
  );
}
