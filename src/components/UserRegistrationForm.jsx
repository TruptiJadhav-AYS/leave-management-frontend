import {
  Button,
  CardContent,
  Grid,
  InputBase,
  Stack,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";
import Card from "@mui/material/Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseReponsive from "../hooks/UseResponsive";
import * as Yup from "yup";
import { useFormik } from "formik";

export default function UserRegistrationForm() {
  const responsive=UseReponsive()
  const [clickedBtnID, setClickedBtnID] = useState("");
  function handleClick(id) {
    setClickedBtnID(id);
  }

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
      Name: "",
      Role: "",
      Email: "",
      PhoneNo: "",
      DateOfBirth: "",
      DepartmentID: "",
      Gender: "",
      ManagerID: "",
    },

    validationSchema: Yup.object({
      Name: Yup.string().required("Name is Mandatory."),

      Role: Yup.string().required("Role is required."),

      Email: Yup.string()
        .trim()
        .matches(emailRegex, "Invalid email format")
        .required("Email is required."),

      PhoneNo: Yup.number()
        .test("len", "PhoneNo should contain only 10 characters.", (value) => {
          if (value === undefined || value === null) {
            return true;
          }
          return String(value).length === 10;
        })
        .required("PhoneNo is required."),

      DateOfBirth: Yup.date()
        .min("1950-01-01", "Birthdate should be after 1950-01-01")
        .max(eighteenYearsAgo, `Birthdate should be before ${eighteenYearsAgo}`)
        .required("Date of birth is required."),

      DepartmentID: Yup.number().required("DepartmentID is mandatory."),

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

      ManagerID: Yup.number().required("Manager ID is required."),
    }),
    onSubmit: (values) => {
      console.log("New Employee Added Successfully.");
      console.log(values);
      navigate("/Employee/Employees");
      alert("Employee onboarded successfully !!!");
    },
  });

  const errors = formik.errors;

  console.log(formik.values);

  return (
    <Grid container justifyContent={"center"} width="100%" pt={3}>
      <Card
        elevation={1}
        sx={{
          textAlign: "left",
          width : (responsive.isDesktop || responsive.isLaptop || responsive.isTa) ? "70%" : "100%",
        }}
      >
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <Typography color={"primary"} variant="h5">
              Onboard Employee
            </Typography>
            <br />

            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
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

              <Grid item xs={12} sm={6} md={6} lg={6}>
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
                    <MenuItem value="Manager">Manager</MenuItem>
                    <MenuItem value="Employee">Employee</MenuItem>
                  </Select>
                  {formik.touched.Role && errors.Role && (
                    <Typography variant="caption" color="error">
                      {errors.Role}
                    </Typography>
                  )}
                </Stack>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
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
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Stack width={"100%"}>
                  <Typography variant="body2"> PHONE NO</Typography>
                  <InputBase
                    type="tel"
                    pattern="[0-9]*"
                    maxLength={10}
                    name="PhoneNo"
                    placeholder=" Phone Number"
                    onChange={formik.handleChange}
                    value={formik.values.PhoneNo}
                    sx={{
                      border:
                        clickedBtnID === "PhoneNo"
                          ? "2px solid blue"
                          : "2px solid  rgba(204, 204, 204, 0.5)",
                      height: "40px",
                      borderRadius: 1,
                    }}
                    onClick={() => handleClick("PhoneNo")}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.PhoneNo && errors.PhoneNo && (
                    <Typography variant="caption" color="error">
                      {errors.PhoneNo}
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
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
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
                          border: "2px solid rgba(204, 204, 204, 0.5)"
                        }
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
            </Grid>
            <br />

            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Stack width={"100%"}>
                  <Typography variant="body2"> Department ID </Typography>
                  <InputBase
                    type="tel"
                    pattern="[0-9]*"
                    name="DepartmentID"
                    placeholder=" DepartmentID"
                    onChange={formik.handleChange}
                    required
                    sx={{
                      border:
                        clickedBtnID === "DepartmentID"
                          ? "2px solid blue"
                          : "2px solid  rgba(204, 204, 204, 0.5)",
                      height: "40px",
                      borderRadius: 1,
                    }}
                    onClick={() => handleClick("DepartmentID")}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.DepartmentID && errors.DepartmentID && (
                    <Typography variant="caption" color="error">
                      {errors.DepartmentID}
                    </Typography>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Stack width={"100%"}>
                  <Typography variant="body2"> Manager ID</Typography>
                  <InputBase
                    type="tel"
                    pattern="[0-9]*"
                    placeholder=" ManagerID"
                    name="ManagerID"
                    onChange={formik.handleChange}
                    value={formik.values.ManagerID}
                    sx={{
                      border:
                        clickedBtnID === "ManagerID"
                          ? "2px solid blue"
                          : "2px solid  rgba(204, 204, 204, 0.5)",
                      height: "40px",
                      borderRadius: 1,
                    }}
                    onClick={() => handleClick("ManagerID")}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.ManagerID && errors.ManagerID && (
                    <Typography variant="caption" color="error">
                      {errors.ManagerID}
                    </Typography>
                  )}
                </Stack>
              </Grid>
            </Grid>
            <br />

            <Button type="submit" variant="contained" sx={{textTransform:"none",my:2}}>
              Onboard Employee
            </Button>

          </form>
        </CardContent>
      </Card>
    </Grid>
  );
}
