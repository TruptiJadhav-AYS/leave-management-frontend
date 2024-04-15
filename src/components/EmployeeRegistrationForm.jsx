import {
  Button,
  CardContent,
  Grid,
  InputBase,
  Stack,
  Typography,
  MenuItem,
  Select,
  Alert
} from "@mui/material";
import Card from "@mui/material/Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseReponsive from "../hooks/UseResponsive";
import * as Yup from "yup";
import { useFormik } from "formik";
import CheckIcon from "@mui/icons-material/Check";
import {useDispatch} from 'react-redux'
import { addEmployee } from "../Store/action/EmployeeAction";

export default function EmployeeRegistrationForm() {
  const responsive = UseReponsive();
  let dispatch=useDispatch()

  const [clickedBtnID, setClickedBtnID] = useState("");
  let [onBoardSuccess, setOnBoardSuccess] = useState(false);

  function handleClick(id) {
    setClickedBtnID(id);
  }
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 220,
        width: 250,
      },
    },
  };

  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const today = new Date();
  const eighteenYearsAgo = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );

  const formik = useFormik({
    initialValues: {
      name: "",
      // role: "",
      email: "",
      mobile_no: "",
      dob: "",
      department: "",
      gender: "",
      manager: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("name is Mandatory."),

      // Role: Yup.string().required("Role is required."),

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
        .max(eighteenYearsAgo, `Birthdate should be before ${eighteenYearsAgo.getDate()}-${eighteenYearsAgo.getMonth()}-${eighteenYearsAgo.getFullYear()}`)
        .required("Date of birth is required."),

      department: Yup.string().required("department is mandatory."),

      gender: Yup.string().required("gender is required."),

    }),
    onSubmit: (values) => {
      dispatch(addEmployee(values))
      setOnBoardSuccess(true);
      setTimeout(() => {
        navigate("/Employee/Employees");
      }, 1000);
    },
  });

  const errors = formik.errors;

  console.log(formik.values);
  function onAddInventoryClick(){
    navigate("/Employee/Employees/NewRegistration/Inventory")
  }

  return (
    <Grid container justifyContent={"center"} width="100%" pt={responsive.isMobile ? 0 : 3}>
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
                Onboard Employee
              </Typography>

              <Grid container spacing={1}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  height={responsive.isMobile ? "14vh" : "11vh"}
                >
                  <Stack width={"100%"}>
                    <Typography variant="body2"> NAME</Typography>
                    <InputBase
                      placeholder="name"
                      type="text"
                      name="name"
                      sx={{
                        border:
                          clickedBtnID === "name"
                            ? "2px solid blue"
                            : "2px solid  rgba(204, 204, 204, 0.5)",
                        height: "40px",
                        borderRadius: 1,
                        px:1
                      }}
                      onClick={() => handleClick("name")}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
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
                  height={responsive.isMobile ? "11vh" : "11vh"}
                >
                  <Stack width={"100%"}>
                    <Typography variant="body2"> GENDER </Typography>
                    <Select
                      size="small"
                      name="gender"
                      onChange={formik.handleChange}
                      value={formik.values.gender}
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
                      onClick={() => handleClick("gender")}
                      onBlur={formik.handleBlur}
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                    {formik.touched.gender && errors.gender && (
                      <Typography variant="caption" color="error">
                        {errors.gender}
                      </Typography>
                    )}
                  </Stack>
                </Grid>

                {/* <Grid item xs={12} sm={6} md={6} lg={6}>
                <Stack width={"100%"}>
                  <Typography variant="body2"> ROLE </Typography>
                  <Select
                    size="small"
                    name="Role"
                    onChange={formik.handleChange}
                    value={formik.values.Role}
                    sx={{  
                      "& fieldset": {
                        borderColor: "rgba(204, 204, 204, 0.5)",
                        borderWidth: "2px",
                      },
                      "&:hover": {
                        "&& fieldset": {
                          border: "2px solid rgba(204, 204, 204, 0.5)"
                        }
                      },
                      height: "40px",
                      borderRadius: 1,
                    }}
                    onClick={() => handleClick("Role")}
                    onBlur={formik.handleBlur}
                  >
                    <MenuItem value="manager"> manager</MenuItem>
                    <MenuItem value="Employee">Employee</MenuItem>
                  </Select>
                  {formik.touched.Role && errors.Role && (
                    <Typography variant="caption" color="error">
                      {errors.Role}
                    </Typography>
                  )} 
                </Stack>
              </Grid>
              */}
              </Grid>
              <br />
              <Grid container spacing={1}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  height={responsive.isMobile ? "14vh" : "8vh"}
                >
                  <Stack width={"100%"}>
                    <Typography variant="body2"> EMAIL </Typography>
                    <InputBase
                      type="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      placeholder="example@gmail.com"
                      sx={{
                        border:
                          clickedBtnID === "email"
                            ? "2px solid blue"
                            : "2px solid  rgba(204, 204, 204, 0.5)",
                        height: "40px",
                        borderRadius: 1,
                        px:1
                      }}
                      onClick={() => handleClick("email")}
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
                  height={responsive.isMobile ? "7vh" : "8vh"}
                >
                  <Stack width={"100%"}>
                    <Typography variant="body2"> CONTACT NO</Typography>
                    <InputBase
                      type="tel"
                      pattern="[0-9]*"
                      maxLength={10}
                      name="mobile_no"
                      placeholder="Phone Number"
                      onChange={formik.handleChange}
                      value={formik.values.mobile_no}
                      sx={{
                        border:
                          clickedBtnID === "contact"
                            ? "2px solid blue"
                            : "2px solid  rgba(204, 204, 204, 0.5)",
                        height: "40px",
                        px:1,
                        borderRadius: 1,
                      }}
                      onClick={() => handleClick("contact")}
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

              <Grid container height={"10vh"} spacing={1}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  height={responsive.isMobile ? "14vh" : "11vh"}
                >
                  <Stack width={"100%"}>
                    <Typography variant="body2"> DEPARTMENT</Typography>
                    <Select
                      size="small"
                      name="department"
                      onChange={formik.handleChange}
                      value={formik.values.department}
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
                      onClick={() => handleClick("department")}
                      onBlur={formik.handleBlur}
                    >
                      <MenuItem value="Human Resource">Human Resource</MenuItem>
                      <MenuItem value="Support">Support</MenuItem>
                      <MenuItem value="Developement">Developement</MenuItem>
                      <MenuItem value="Finance">Finance</MenuItem>
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
                  height={responsive.isMobile ? "10vh" : "11vh"}
                >
                  <Stack width={"100%"}>
                    <Typography variant="body2">MANAGER</Typography>

                    <Select
                      size="small"
                      name="manager"
                      onChange={formik.handleChange}
                      value={formik.values.manager}
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
                      <MenuItem value="Pratiksha Nimbalkar">
                        Pratiksha Nimbalkar
                      </MenuItem>
                      <MenuItem value="Pruthviraj Suryavanshi">
                        Pruthviraj Suryavanshi
                      </MenuItem>
                      <MenuItem value="Pratik Deshmukh">
                        Pratik Deshmukh
                      </MenuItem>
                      <MenuItem value="Prarana Divekar">
                        Prarana Divekar
                      </MenuItem>
                      <MenuItem value="Abhinandan Ambekar">
                        Abhinandan Ambekar
                      </MenuItem>
                      <MenuItem value="Trupti Jadhav">Trupti Jadhav</MenuItem>
                    </Select>

                    {/* {formik.touched.manager && errors.manager && (
                      <Typography variant="caption" color="error">
                        {errors.manager}
                      </Typography>
                    )} */}
                  </Stack>
                </Grid>
              </Grid>

              <Grid container spacing={1} mt={2}>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                sx={{ display: "flex", justifyContent: "space-between" }}
                height={responsive.isMobile ? "7vh" : "8vh"}
              >
                <Stack width={"100%"}>
                  <Typography variant="body2"> DATE OF BIRTH </Typography>
                  <InputBase
                    type="date"
                    name="dob"
                    onChange={formik.handleChange}
                    sx={{
                      border:
                        clickedBtnID === "DateOfBirth"
                          ? "2px solid blue"
                          : "2px solid  rgba(204, 204, 204, 0.5)",
                      height: "40px",
                      borderRadius: 1,
                      p:1,
                    }}
                    onClick={() => handleClick("DateOfBirth")}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.dob && errors.dob && (
                    <Typography variant="caption" color="error">
                      {errors.dob}
                    </Typography>
                  )}
                </Stack>
              </Grid>

              </Grid>

              <br />
              <Grid container sx={{mt: responsive.isMobile ? 12: 2,rowGap:2 }}>
              <Button
                variant="outlined"
                onClick={
                  onAddInventoryClick
                }
                sx={{
                  mr: 2,
                  textTransform: "none",
                }}
              >
                Assign Inventory
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ textTransform: "none",
               }}
              >
                Onboard Employee
              </Button>
              </Grid>
            </form>
          </CardContent>
        </Card>
        {onBoardSuccess && (
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            sx={{ height: "50px", mt: "10px" }}
            severity="success"
          >
            Employee onboarded successfully.
          </Alert>
        )}
      </Stack>
    </Grid>
  );
}
