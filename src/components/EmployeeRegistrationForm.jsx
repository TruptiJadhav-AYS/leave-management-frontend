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
} from "@mui/material";
import Card from "@mui/material/Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseReponsive from "../hooks/UseResponsive";
import * as Yup from "yup";
import { useFormik } from "formik";
import CheckIcon from "@mui/icons-material/Check";

export default function EmployeeRegistrationForm() {
  const responsive = UseReponsive();
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
  // const today = new Date();
  // const eighteenYearsAgo = new Date(
  //   today.getFullYear() - 18,
  //   today.getMonth(),
  //   today.getDate()
  // );

  const formik = useFormik({
    initialValues: {
      Name: "",
      // Role: "",
      Email: "",
      Contact: "",
      // DateOfBirth: "",
      Department: "",
      Gender: "",
      Manager: "",
    },

    validationSchema: Yup.object({
      Name: Yup.string().required("Name is mandatory."),

      // Role: Yup.string().required("Role is required."),

      Email: Yup.string()
        .trim()
        .matches(emailRegex, "Invalid email format")
        .required("Email is required."),

      Contact: Yup.number()
        .test(
          "len",
          "Contact no should contain only 10 characters.",
          (value) => {
            if (value === undefined || value === null) {
              return true;
            }
            return String(value).length === 10;
          }
        )
        .required("Contact no is required."),

      // DateOfBirth: Yup.date()
      //   .min("1950-01-01", "Birthdate should be after 1950-01-01")
      //   .max(eighteenYearsAgo, `Birthdate should be before ${eighteenYearsAgo.getDate()}-${eighteenYearsAgo.getMonth()}-${eighteenYearsAgo.getFullYear()}`)
      //   .required("Date of birth is required."),

      Department: Yup.string().required("Department is mandatory."),

      Gender: Yup.string().required("Gender is required."),

      // Password: Yup.string()
      //   .min(8, "Password should atleast Contain 8 or above characters")
      //   .matches(/[a-z]/, "Password must contain a lowercase letter")
      //   .matches(/[A-Z]/, "Password must contain an uppercase letter")
      //   .matches(
      //     /[!@#$%^&*()_+-]+/,
      //     "Password must contain a special character"
      //   )
      //   .required("Password is required."),

      Manager: Yup.string().required("Manager is required."),
    }),
    onSubmit: (values) => {
      console.log(values);
      setOnBoardSuccess(true);
      setTimeout(() => {
        navigate("/Employee/Employees");
      }, 1000);
    },
  });

  const errors = formik.errors;

  console.log(formik.values);

  return (
    <Grid container justifyContent={"center"} width="100%" pt={3}>
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
                      placeholder=" Name"
                      type="text"
                      name="Name"
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
                      onBlur={formik.handleBlur}
                      value={formik.values.Name}
                    />
                    {formik.touched.Name && errors.Name && (
                      <Typography variant="caption" color="error">
                        {errors.Name}
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
                      name="Gender"
                      onChange={formik.handleChange}
                      value={formik.values.Gender}
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
                      onBlur={formik.handleBlur}
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                    </Select>
                    {formik.touched.Gender && errors.Gender && (
                      <Typography variant="caption" color="error">
                        {errors.Gender}
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
                    <MenuItem value="Manager"> Manager</MenuItem>
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
                      name="Email"
                      onChange={formik.handleChange}
                      value={formik.values.Email}
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
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.Email && errors.Email && (
                      <Typography variant="caption" color="error">
                        {errors.Email}
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
                    <Typography variant="body2"> Contact NO</Typography>
                    <InputBase
                      type="tel"
                      pattern="[0-9]*"
                      maxLength={10}
                      name="Contact"
                      placeholder=" Phone Number"
                      onChange={formik.handleChange}
                      value={formik.values.Contact}
                      sx={{
                        border:
                          clickedBtnID === "Contact"
                            ? "2px solid blue"
                            : "2px solid  rgba(204, 204, 204, 0.5)",
                        height: "40px",
                        borderRadius: 1,
                      }}
                      onClick={() => handleClick("Contact")}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.Contact && errors.Contact && (
                      <Typography variant="caption" color="error">
                        {errors.Contact}
                      </Typography>
                    )}
                  </Stack>
                </Grid>
              </Grid>
              <br />

              {/* <Grid container height={"10vh"} spacing={1}> */}
              {/* <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Stack width={"100%"}>
                  <Typography variant="body2"> DATE OF BIRTH </Typography>
                  <InputBase
                    type="date"
                    name="DateOfBirth"
                    onChange={formik.handleChange}
                    sx={{
                      border:
                        clickedBtnID === "DateOfBirth"
                          ? "2px solid blue"
                          : "2px solid  rgba(204, 204, 204, 0.5)",
                      height: "40px",
                      borderRadius: 1,
                    }}
                    onClick={() => handleClick("DateOfBirth")}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.DateOfBirth && errors.DateOfBirth && (
                    <Typography variant="caption" color="error">
                      {errors.DateOfBirth}
                    </Typography>
                  )}
                </Stack>
              </Grid> */}

              {/* </Grid> */}
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
                      name="Department"
                      onChange={formik.handleChange}
                      value={formik.values.Department}
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
                      onClick={() => handleClick("Department")}
                      onBlur={formik.handleBlur}
                    >
                      <MenuItem value="Human Resource">Human Resource</MenuItem>
                      <MenuItem value="Support">Support</MenuItem>
                      <MenuItem value="Developement">Developement</MenuItem>
                      <MenuItem value="Finance">Finance</MenuItem>
                    </Select>

                    {formik.touched.Department && errors.Department && (
                      <Typography variant="caption" color="error">
                        {errors.Department}
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
                    {/* <InputBase
                    placeholder="Manager"
                    name="manager"
                    onChange={formik.handleChange}
                    value={formik.values.manager}
                    sx={{
                      border:
                        clickedBtnID === "manager"
                          ? "2px solid blue"
                          : "2px solid  rgba(204, 204, 204, 0.5)",
                      height: "40px",
                      borderRadius: 1,
                      px:0.5
                    }}
                    onClick={() => handleClick("manager")}
                    onBlur={formik.handleBlur}
                  /> */}

                    <Select
                      size="small"
                      name="Manager"
                      onChange={formik.handleChange}
                      value={formik.values.Manager}
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

                    {formik.touched.Manager && errors.Manager && (
                      <Typography variant="caption" color="error">
                        {errors.Manager}
                      </Typography>
                    )}
                  </Stack>
                </Grid>
              </Grid>
              <br />
              <Button
                variant="outlined"
                onClick={() => {
                  // Handle adding inventory
                }}
                sx={{
                  mr: 2,
                  mt: responsive.isMobile ? 12 : 2,
                }}
              >
                Add Inventory
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ textTransform: "none", mt: responsive.isMobile ? 12 : 2 }}
              >
                Onboard Employee
              </Button>
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
