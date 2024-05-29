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
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  useAddEmployeeMutation,
  useGetEmployeesByIdQuery,
  useGetEmployeesQuery,
  useUpdateEmployeeMutation,
} from "../Store/slice/apiEmployeeSlice";
import { useGetDepartmentsQuery } from "../Store/slice/apiDepartmentSlice";
import { useGetInventoryQuery } from "../Store/slice/apiInventorySlice";
import { useParams } from "react-router-dom";

export default function EmloyeeDetailForm() {
  const {id}=useParams()
  let selectedEmp  = parseInt(id)
  console.log(id,"iddd")
  const { data: employee ,isLoading} = useGetEmployeesByIdQuery(id);
  const {data : employees}=useGetEmployeesQuery()
  const { data: inventory } = useGetInventoryQuery();

  const Employee = employee || {};
  const Employees = employees|| [];
  const InventoryList = inventory || [];

  console.log(employee)
  

  // let selectedEmpIndex = Employees.findIndex((emp) => emp.id === selectedEmp);
  const initialValues = {
    name:
       selectedEmp
          ? Employee
            ? Employee.name
            : ""
          : "",     
    email:
      selectedEmp
          ? Employee
            ? Employee.email
            : ""
          : "",
    mobile_number:
      selectedEmp
          ? Employee
            ? Employee.mobile_number
            : ""
        : "",
    dob:
      selectedEmp
          ? Employee
            ? Employee.dob
            : ""
        : "",
    department_id:
      selectedEmp
          ? Employee
            ? Employee.department_id
            : ""
        : "",
    gender:
      selectedEmp
          ? Employee
            ? Employee.gender
            : ""
        : "",
    manager_id:
      selectedEmp
          ? Employee
            ? Employee.manager_id
            : null
        : null,
    // inventory_id:""
  };

  const responsive = UseReponsive();
  const [clickedBtnID, setClickedBtnID] = useState("");
  let [onBoardSuccess, setOnBoardSuccess] = useState(false);
  const [Department, setDepartment] = useState([]);
  const [updateEmployee] = useUpdateEmployeeMutation();
  const { data: department, isSuccess } = useGetDepartmentsQuery();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dept = department || [];

  useEffect(() => {
    if (isSuccess) {
      setDepartment(dept);
    }
  }, [isSuccess, dept]);

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
      manager_id: Yup.string().nullable(),
      gender: Yup.string().required("Gender is required."),
    }),

    onSubmit: async (values) => {
      console.log(values);
      {
        updateEmployee({ id: selectedEmp, updatedEmployeeDetails: values });
      }
      setOnBoardSuccess(true);
      setTimeout(() => {
        navigate("/Employee/Employees");
      }, 1000);
      console.log(values);
    },
  });

  const errors = formik.errors;
  function handleClick(id)
 {
    setClickedBtnID(id)
;
  }
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 130,
        width: 250,
        scrollbarWidth: "thin",
      },
    },
  };

  const navigate = useNavigate();

  if(isLoading){
    return(
      <></>
    )
  }

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
                Edit Employee Details
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
                    <Typography variant="body2">REPORTING MANAGER</Typography>

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
                      value={formik.values.inventory_id}
                      onChange={formik.handleChange}
                      name="inventory_id"
                      size="small"
                      labelId="inventory_id"
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
                        <MenuItem key={inventory.id} value={inventory.id}>
                          {inventory.name} - {inventory.category.name} -{" "}
                          {inventory.serial_number}
                        </MenuItem>
                      ))}
                    </Select>
                  </Stack>
                </Grid>
              </Grid>

              <Box pt={responsive.isMobile ? 3 : 0}>
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
            Employee Edited successfully.
          </Alert>
        )}
      </Stack>
    </Grid>
  );
}