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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseReponsive from "../hooks/UseResponsive";
import CheckIcon from "@mui/icons-material/Check";
// import { addEmployee, editEmployee } from "../Store/action/EmployeeAction";
import editEmployee from "../Store/action/EditEmployeeAction";
import addEmployee from "../Store/action/AddEmployeeAction"
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

export default function EmloyeeDetailForm({ addOrEditForm }) {
  let { Employees } = useSelector((state) => state.employees);
  let { selectedEmp } = useSelector((state) => state.employees);
  let managerList = [];
  let departmentList=["Human Resource","Support","Developement","Finance"]

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
    mobile_no:
      addOrEditForm === "edit"
        ? selectedEmp
          ? Employees[selectedEmpIndex].mobile_no
            ? Employees[selectedEmpIndex].mobile_no
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
    department:
      addOrEditForm === "edit"
        ? selectedEmp
          ? Employees[selectedEmpIndex].department
            ? Employees[selectedEmpIndex].department
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
    manager:
      addOrEditForm === "edit"
        ? selectedEmp
          ? Employees[selectedEmpIndex].manager
            ? Employees[selectedEmpIndex].manager
            : ""
          : ""
        : "",
  };

  const responsive = UseReponsive();
  const [clickedBtnID, setClickedBtnID] = useState("");
  let [onBoardSuccess, setOnBoardSuccess] = useState(false);
  let dispatch = useDispatch();
  const InventoryList=useSelector((state) => state.Inventory.InventoryListItems)

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
      name: Yup.string().required("name is Mandatory."),

      email: Yup.string()
        .trim()
        .matches(emailRegex, "Invalid email format")
        .required("email is required."),

      mobile_no: Yup.number()
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
        .required("contact no is required."),

      dob: Yup.date()
        .min("1950-01-01", "Birthdate should be after 1950-01-01")
        .max(
          eighteenYearsAgo,
          `Birthdate should be before ${eighteenYearsAgo.getDate()}-${eighteenYearsAgo.getMonth()}-${eighteenYearsAgo.getFullYear()}`
        )
        .required("Date of birth is required."),

      department: Yup.string().required("department is mandatory."),

      gender: Yup.string().required("gender is required."),
    }),

    onSubmit: (values) => {
      
      {
        addOrEditForm === "add"
          ? dispatch(addEmployee(values))
          : dispatch(editEmployee(values));
      }
      setOnBoardSuccess(true);
      setTimeout(() => {
        navigate("/Employee/Employees");
      }, 1000);
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
                    <Typography variant="body2"> NAME</Typography>
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
                      name="mobile_no"
                      placeholder=" Phone Number"
                      sx={{
                        border:
                          clickedBtnID === "Contact"
                            ? "2px solid blue"
                            : "2px solid  rgba(204, 204, 204, 0.5)",
                        height: "40px",
                        borderRadius: 1,
                      }}
                      onClick={() => handleClick("Contact")}
                      onChange={formik.handleChange}
                      value={formik.values.mobile_no}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.mobile_no && errors.mobile_no && (
                      <Typography variant="caption" color="error">
                        {errors.mobile_no}
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
                      name="department"
                      sx={{
                        "& fieldset": {
                          borderColor: "rgba(204, 204, 204, 0.5)",
                          borderWidth: "2px",
                        },
                        "&:hover": {
                          "&& fieldset": {
                            border:
                              clickedBtnID === "Department"
                                ? "2px solid blue"
                                : "2px solid  rgba(204, 204, 204, 0.5)",
                          },
                        },
                        height: "40px",
                        borderRadius: 1,
                      }}
                      onClick={() => handleClick("Department")}
                      onChange={formik.handleChange}
                      value={formik.values.department}
                      onBlur={formik.handleBlur}
                    >
                      {departmentList.map((department,index) => (
                        <MenuItem key={index} value={department}>
                          {department}
                        </MenuItem>
                      ))}
                    </Select>

                    {formik.touched.department && errors.department && (
                      <Typography variant="caption" color="error">
                        {errors.department}
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
                      name="manager"
                      sx={{
                        "& fieldset": {
                          borderColor: "rgba(204, 204, 204, 0.5)",
                          borderWidth: "2px",
                        },
                        "&:hover": {
                          "&& fieldset": {
                            border:
                              clickedBtnID === "Manager"
                                ? "2px solid blue"
                                : "2px solid  rgba(204, 204, 204, 0.5)",
                          },
                        },
                        height: "40px",
                        borderRadius: 1,
                      }}
                      MenuProps={MenuProps}
                      onChange={formik.handleChange}
                      value={formik.values.manager}
                    >
                      {managerList.map((manager,index) => (
                        <MenuItem key={index} value={manager}>
                          {manager}
                        </MenuItem>
                      ))}
                    </Select>
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
                      {InventoryList.map((inventory) => (
                        ((inventory.assign===0) &&
                        <MenuItem key={inventory.id} value={inventory.name} >
                          {inventory.name} - {inventory.category} - {inventory.serialNo}
                        </MenuItem>
                        )
                      ))}
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