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

import * as Yup from "yup";
import { useFormik } from "formik";

export default function UserRegistrationForm() {
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
      navigate("/Employees")

    },
  });

  const errors = formik.errors;

  console.log(formik.values);

  return (
    <Grid
      container
      justifyContent={"center"}
      width="100%"
      mt="14vh"
    >
      <Card
        elevation={1}
        pt="3%"
        sx={{
          textAlign: "left",
          width:"80%"
        }}     
      >
        <CardContent component={"form"}  onSubmit={formik.handleSubmit}>
          <Typography color={"primary"} variant="h5">Onboard Employee</Typography>
          <br />

          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Stack width={"100%"}>
                <Typography  variant="body2"> NAME</Typography>
                <InputBase
                  placeholder=" Name"
                  type="text"
                  name="Name"
                  sx={{
                    border:
                      clickedBtnID === "Name"
                        ? "2px solid blue"
                        : "1px solid black",
                    height: "40px",
                    borderRadius: 1,
                  }}
                  onClick={() => handleClick("Name")}
                  onChange={formik.handleChange}
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
                    border:
                      clickedBtnID === "Role"
                        ? "1px solid blue"
                        : "1px solid black",
                    height: "40px",
                    borderRadius: 1,
                  }}
                  onClick={() => handleClick("Role")}
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
                        : "1px solid black",
                    height: "40px",
                    borderRadius: 1,
                  }}
                  onClick={() => handleClick("Email")}
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
                  type="number"
                  name="PhoneNo"
                  pattern="[0-9]{10}"
                  inputMode="numeric"
                  placeholder=" Phone Number"
                  onChange={formik.handleChange}
                  value={formik.values.PhoneNo}
                  sx={{
                    border:
                      clickedBtnID === "PhoneNo"
                        ? "2px solid blue"
                        : "1px solid black",
                    height: "40px",
                    borderRadius: 1,
                  }}
                  onClick={() => handleClick("PhoneNo")}
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
                        : "1px solid black",
                    height: "40px",
                    borderRadius: 1,
                  }}
                  onClick={() => handleClick("DateOfBirth")}
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
                    border:
                      clickedBtnID === "Gender"
                        ? "1px solid blue"
                        : "1px solid black",
                    height: "40px",
                    borderRadius: 1,
                  }}
                  onClick={() => handleClick("Gender")}
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
                  type="number"
                  name="DepartmentID"
                  placeholder=" DepartmentID"
                  onChange={formik.handleChange}
                  required
                  sx={{
                    border:
                      clickedBtnID === "DepartmentID"
                        ? "2px solid blue"
                        : "1px solid black",
                    height: "40px",
                    borderRadius: 1,
                  }}
                  onClick={() => handleClick("DepartmentID")}
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
                  type="number"
                  placeholder=" ManagerID"
                  name="ManagerID"
                  onChange={formik.handleChange}
                  value={formik.values.ManagerID}
                  sx={{
                    border:
                      clickedBtnID === "ManagerID"
                        ? "2px solid blue"
                        : "1px solid black",
                    height: "40px",
                    borderRadius: 1,
                  }}
                  onClick={() => handleClick("ManagerID")}
                />
                {formik.touched.ManagerID && errors.ManagerID && (
                  <Typography variant="caption" color="error">
                    {errors.ManagerID}
                  </Typography>
                )}
              </Stack>
            </Grid>
          </Grid>
          <br/>
          <Grid container alignItems={'center'} justifyContent={'center'}>
            <Button type="submit" variant="contained" >
              Submit
            </Button>
            </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}