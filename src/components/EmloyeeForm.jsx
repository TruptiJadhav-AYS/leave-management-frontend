import {
  Button,
  CardContent,
  Grid,
  InputBase,
  Stack,
  Typography,
  MenuItem,
  Select,
  Alert,
  Box,
} from "@mui/material";
import Card from "@mui/material/Card";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseReponsive from "../hooks/UseResponsive";
import CheckIcon from "@mui/icons-material/Check";
// import { addEmployee, editEmployee } from "../Store/action/EmployeeAction";
import editEmployee from "../Store/action/EditEmployeeAction";
import addEmployee from "../Store/action/AddEmployeeAction";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {
  useAddEmployeeMutation,
  useGetEmployeesQuery,
  useUpdateEmployeeMutation,
} from "../Store/slice/apiEmployeeSlice";
import { useGetDepartmentsQuery } from "../Store/slice/apiDepartmentSlice";

export default function EmloyeeDetailForm({ addOrEditForm }) {
  // let { Employees } = useSelector((state) => state.employees);
  const { data: employees } = useGetEmployeesQuery();

  const Employees = employees || [];
  let { selectedEmp } = useSelector((state) => state.employees);
  let managerList = ["Pratiksha", "Pruthvi", "Trupti"];

  for (let i in Employees) {
    if (Employees[i].role == "Manager") {
      managerList.push(Employees[i].name);
    }
  }

  let selectedEmpIndex = Employees.findIndex((emp) => emp.id === selectedEmp);
  const initialValues = {
    name:
      addOrEditForm === "edit"
        ? selectedEmp
          ? Employees[selectedEmpIndex].name
            ? Employees[selectedEmpIndex].name
            : ""
          : ""
        : "",
    email:
      addOrEditForm === "edit"
        ? selectedEmp
          ? Employees[selectedEmpIndex].email
            ? Employees[selectedEmpIndex].email
            : ""
          : ""
        : "",
    mobile_number:
      addOrEditForm === "edit"
        ? selectedEmp
          ? Employees[selectedEmpIndex].mobile_number
            ? Employees[selectedEmpIndex].mobile_number
            : ""
          : ""
        : "",
    dob:
      addOrEditForm === "edit"
        ? selectedEmp
          ? Employees[selectedEmpIndex].dob
            ? Employees[selectedEmpIndex].dob
            : ""
          : ""
        : "",
    department_id:
      addOrEditForm === "edit"
        ? selectedEmp
          ? Employees[selectedEmpIndex].department_id
            ? Employees[selectedEmpIndex].department_id
            : ""
          : ""
        : "",
    gender:
      addOrEditForm === "edit"
        ? selectedEmp
          ? Employees[selectedEmpIndex].gender
            ? Employees[selectedEmpIndex].gender
            : ""
          : ""
        : "",
    manager_id:
      addOrEditForm === "edit"
        ? selectedEmp
          ? Employees[selectedEmpIndex].manager_id
            ? Employees[selectedEmpIndex].manager_id
            : ""
          : ""
        : "",
  };

  const responsive = UseReponsive();
  const [clickedBtnID, setClickedBtnID] = useState("");
  let [onBoardSuccess, setOnBoardSuccess] = useState(false);
  const [Department, setDepartment] = useState([]);
  const [addEmp] = useAddEmployeeMutation();
  const [updateEmployee] = useUpdateEmployeeMutation();
  const { data: department, isSuccess } = useGetDepartmentsQuery();
  const dept = department || [];
  console.log(Department);

  useEffect(() => {
    if (isSuccess) {
      setDepartment(dept);
    }
  }, [isSuccess, dept]);
  const InventoryList = useSelector(
    (state) => state.Inventory.InventoryListItems
  );

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const today = new Date();
  const eighteenYearsAgo = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required."),

      email: Yup.string()
        .trim()
        .matches(emailRegex, "Invalid email format")
        .required("Email is required."),

      mobile_number: Yup.number()
        .test(
          "len",
          "contact no should contain only 10 characters.",
          (value) => {
            if (value === undefined || value === null) {
              return true;
            }
            return String(value).length === 10;
          }
        )
        .required("Contact no is required."),

      dob: Yup.date()
        .min("1950-01-01", "Birthdate should be after 1950-01-01")
        .max(
          eighteenYearsAgo,
          `Birthdate should be before ${eighteenYearsAgo.getDate()}-${eighteenYearsAgo.getMonth()}-${eighteenYearsAgo.getFullYear()}`
        )
        .required("Date of birth is required."),

      department_id: Yup.number().required("Department is required."),
      // manager: Yup.string().required("Manager is mandatory."),
      gender: Yup.string().required("Gender is required."),
    }),

    onSubmit: (values) => {
      // addEmployee(values);
      console.log(values);
      {
        addOrEditForm === "add"
          ? // ? dispatch(addEmployee(values))
            addEmp(values)
          : updateEmployee(selectedEmp, values);
      }
      // console.log(values)
      setOnBoardSuccess(true);
      setTimeout(() => {
        navigate("/Employee/Employees");
      }, 1000);
      console.log(values);
    },
  });

  const errors = formik.errors;
  function handleClick(id) {
    setClickedBtnID(id);
  }
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 130,
        width: 250,
      },
    },
  };

  const navigate = useNavigate();

  return (
    <Grid
      container
      justifyContent={"center"}
      width="100%"
      pt={responsive.isMobile ? 0 : 3}
    >
      <Stack
        sx={{
          textAlign: "left",
          width:
            responsive.isDesktop || responsive.isLaptop || responsive.isTablet
              ? "70%"
              : "100%",
        }}
      >
        <Card elevation={1}>
          <CardContent>
            <form onSubmit={formik.handleSubmit}>
              <Typography color={"primary"} variant="h5" mb={2}>
                {addOrEditForm === "add"
                  ? "Onboard Employee"
                  : "Edit Employee Details"}
              </Typography>

              <Grid container spacing={1}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  height={responsive.isMobile ? "13vh" : "11vh"}
                >
                  <Stack width={"100%"}>
                    <Typography variant="body2">NAME</Typography>
                    <InputBase
                      placeholder=" Name"
                      type="text"
                      name="name"
                      sx={{
                        border:
                          clickedBtnID === "Name"
                            ? "2px solid blue"
                            : "2px solid  rgba(204, 204, 204, 0.5)",
                        height: "40px",
                        borderRadius: 1,
                      }}
                      onClick={() => handleClick("Name")}
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    {formik.touched.name && errors.name && (
                      <Typography variant="caption" color="error">
                        {errors.name}
                      </Typography>
                    )}
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  height={responsive.isMobile ? "10vh" : "11vh"}
                >
                  <Stack width={"100%"}>
                    <Typography variant="body2"> GENDER </Typography>
                    <Select
                      size="small"
                      name="gender"
                      sx={{
                        "& fieldset": {
                          borderColor: "rgba(204, 204, 204, 0.5)",
                          borderWidth: "2px",
                        },
                        "&:hover": {
                          "&& fieldset": {
                            border: "2px solid rgba(204, 204, 204, 0.5)",
                          },
                        },
                        height: "40px",
                        borderRadius: 1,
                      }}
                      onClick={() => handleClick("Gender")}
                      onChange={formik.handleChange}
                      value={formik.values.gender}
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                    </Select>
                    {formik.touched.gender && errors.gender && (
                      <Typography variant="caption" color="error">
                        {errors.gender}
                      </Typography>
                    )}
                  </Stack>
                </Grid>
              </Grid>
              <br />
              <Grid container spacing={1}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  height={responsive.isMobile ? "13vh" : "8vh"}
                >
                  <Stack width={"100%"}>
                    <Typography variant="body2"> EMAIL </Typography>
                    <InputBase
                      type="text"
                      name="email"
                      placeholder=" example@gmail.com"
                      sx={{
                        border:
                          clickedBtnID === "Email"
                            ? "2px solid blue"
                            : "2px solid  rgba(204, 204, 204, 0.5)",
                        height: "40px",
                        borderRadius: 1,
                      }}
                      onClick={() => handleClick("Email")}
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && errors.email && (
                      <Typography variant="caption" color="error">
                        {errors.email}
                      </Typography>
                    )}
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  height={responsive.isMobile ? "6vh" : "8vh"}
                >
                  <Stack width={"100%"}>
                    <Typography variant="body2">CONTACT NO</Typography>
                    <InputBase
                      type="tel"
                      pattern="[0-9]*"
                      maxLength={10}
                      name="mobile_number"
                      placeholder=" Phone Number"
                      sx={{
                        border:
                          clickedBtnID === "mobile_number"
                            ? "2px solid blue"
                            : "2px solid  rgba(204, 204, 204, 0.5)",
                        height: "40px",
                        borderRadius: 1,
                      }}
                      onClick={() => handleClick("mobile_number")}
                      onChange={formik.handleChange}
                      value={formik.values.mobile_number}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.mobile_number && errors.mobile_number && (
                      <Typography variant="caption" color="error">
                        {errors.mobile_number}
                      </Typography>
                    )}
                  </Stack>
                </Grid>
              </Grid>
              <br />
              <br />

              <Grid container spacing={1}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  height={responsive.isMobile ? "13vh" : "11vh"}
                >
                  <Stack width={"100%"}>
                    <Typography variant="body2"> DEPARTMENT</Typography>
                    <Select
                      size="small"
                      name="department_id"
                      sx={{
                        "& fieldset": {
                          borderColor: "rgba(204, 204, 204, 0.5)",
                          borderWidth: "2px",
                        },
                        "&:hover": {
                          "&& fieldset": {
                            border:
                              clickedBtnID === "department_id"
                                ? "2px solid blue"
                                : "2px solid  rgba(204, 204, 204, 0.5)",
                          },
                        },
                        height: "40px",
                        borderRadius: 1,
                      }}
                      onClick={() => handleClick("department_id")}
                      onChange={formik.handleChange}
                      value={formik.values.department_id}
                      onBlur={formik.handleBlur}
                    >
                      {Department.map((department, index) => (
                        <MenuItem key={index} value={department.id}>
                          {department.department_name}
                        </MenuItem>
                      ))}
                    </Select>

                    {formik.touched.department_id && errors.department_id && (
                      <Typography variant="caption" color="error">
                        {errors.department_id}
                      </Typography>
                    )}
                  </Stack>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  height={responsive.isMobile ? "1vh" : "11vh"}
                >
                  <Stack width={"100%"}>
                    <Typography variant="body2">MANAGER</Typography>

                    <Select
                      size="small"
                      name="manager_id"
                      sx={{
                        "& fieldset": {
                          borderColor: "rgba(204, 204, 204, 0.5)",
                          borderWidth: "2px",
                        },
                        "&:hover": {
                          "&& fieldset": {
                            border:
                              clickedBtnID === "manager_id"
                                ? "2px solid blue"
                                : "2px solid  rgba(204, 204, 204, 0.5)",
                          },
                        },
                        height: "40px",
                        borderRadius: 1,
                      }}
                      MenuProps={MenuProps}
                      onChange={formik.handleChange}
                      value={formik.values.manager_id}
                    >
                      {Employees.map((emp, index) => (
                        <MenuItem key={index} value={emp.id}>
                          {emp.name}
                        </MenuItem>
                      ))}
                    </Select>
                    {formik.touched.manager_id && errors.manager_id && (
                      <Typography variant="caption" color="error">
                        {errors.manager_id}
                      </Typography>
                    )}
                  </Stack>
                </Grid>
              </Grid>
              <br />
              <Grid container mt={responsive.isMobile ? 5 : 0} spacing={1}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                  height={responsive.isMobile ? "9vh" : "11vh"}
                >
                  <Stack width={"100%"}>
                    <Typography variant="body2"> DATE OF BIRTH </Typography>
                    <InputBase
                      type="date"
                      name="dob"
                      sx={{
                        border:
                          clickedBtnID === "DateOfBirth"
                            ? "2px solid blue"
                            : "2px solid  rgba(204, 204, 204, 0.5)",
                        height: "40px",
                        borderRadius: 1,
                        p: 1,
                      }}
                      onClick={() => handleClick("DateOfBirth")}
                      onChange={formik.handleChange}
                      value={formik.values.dob}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.dob && errors.dob && (
                      <Typography variant="caption" color="error">
                        {errors.dob}
                      </Typography>
                    )}
                  </Stack>
                </Grid>
                {/* <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                sx={{ display: "flex", justifyContent: "space-between" }}
                height={responsive.isMobile ? "10vh" : "11vh"}
              >
                <Stack width={"100%"} >
                  <Typography variant="body2"> ASSIGN INVENTORY </Typography>
                  <Select
                      value={formik.values.category}
                      name="assignInventory"
                      size="small"
                      labelId="assignInventory"
                      // onBlur={formik.handleBlur}
                      // onChange={formik.handleChange}
                      sx={{
                        "& fieldset": {
                          borderColor: "rgba(204, 204, 204, 0.5)",
                          borderWidth: "2px",
                        },
                        "&:hover": {
                          "&& fieldset": {
                            border: "2px solid rgba(204, 204, 204, 0.5)",
                          },
                          height:"40px",
                        },
                        
                        
                      }}
                    >
                      {InventoryList.map((inventory) => (
                        <MenuItem key={inventory.id} value={inventory.name} >
                          {inventory.name} - {inventory.category} - {inventory.serialNo}
                        </MenuItem>
                      ))}
                    </Select>
                </Stack>
              </Grid> */}
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  height={responsive.isMobile ? "10vh" : "11vh"}
                >
                  <Stack width={"100%"}>
                    <Typography variant="body2">ASSIGN INVENTORY</Typography>

                    <Select
                      // value={formik.values.category}
                      name="assignInventory"
                      size="small"
                      labelId="assignInventory"
                      sx={{
                        "& fieldset": {
                          borderColor: "rgba(204, 204, 204, 0.5)",
                          borderWidth: "2px",
                        },
                        "&:hover": {
                          "&& fieldset": {
                            border: "2px solid rgba(204, 204, 204, 0.5)",
                          },
                        },
                        height: "40px",
                        borderRadius: 1,
                      }}
                      MenuProps={MenuProps}
                    >
                      {InventoryList.map(
                        (inventory) =>
                          inventory.assign === 0 && (
                            <MenuItem key={inventory.id} value={inventory.name}>
                              {inventory.name} - {inventory.category} -{" "}
                              {inventory.serialNo}
                            </MenuItem>
                          )
                      )}
                    </Select>

                    {/* {formik.touched.manager && errors.manager && (
                      <Typography variant="caption" color="error">
                        {errors.manager}
                      </Typography>
                    )} */}
                  </Stack>
                </Grid>
              </Grid>

              <Box pt={responsive.isMobile ? 3 : 0}>
                {/* <Button
                  // type="submit"
                  variant="outlined"
                  sx={{ textTransform: "none", mt: 2 }}
                  // onClick={onAddInventoryClick}
                >
                  Assign Inventory
                </Button> */}
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ textTransform: "none", mt: 2, ml: 1 }}
                >
                  Submit
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
        {onBoardSuccess && (
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            sx={{ height: "50px", mt: "10px" }}
            severity="success"
          >
            {addOrEditForm === "add"
              ? "Employee Onboarded successfully"
              : "Employee Edited successfully."}
          </Alert>
        )}
      </Stack>
    </Grid>
  );
}