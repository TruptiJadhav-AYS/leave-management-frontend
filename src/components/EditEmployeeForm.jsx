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
import { editEmployee } from "../Store/action/EmployeeAction";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

export default function EditEmployeeForm() {
  const responsive = UseReponsive();
  const [clickedBtnID, setClickedBtnID] = useState("");
  let [onBoardSuccess, setOnBoardSuccess] = useState(false);
  let dispatch=useDispatch()

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
      email: "",
      mobile_no: "",
      dob: "",
      department: "",
      gender: "",
      manager: "",
    },
    validationSchema: Yup.object({
      name: Yup.string(),

      // Role: Yup.string().required("Role is required."),

      email: Yup.string()
        .trim()
        .matches(emailRegex, "Invalid email format"),

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
        ),

      dob: Yup.date()
        .min("1950-01-01", "Birthdate should be after 1950-01-01")
        .max(eighteenYearsAgo, `Birthdate should be before ${eighteenYearsAgo.getDate()}-${eighteenYearsAgo.getMonth()}-${eighteenYearsAgo.getFullYear()}`),

      department: Yup.string(),

      gender: Yup.string(),

    }),
    onSubmit: (values) => {
      dispatch(editEmployee(values));
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
        maxHeight: 220,
        width: 250,
      },
    },
  };

  const navigate = useNavigate();

  // function onAddInventoryClick() {
  //   navigate("/Employee/Employees/EditForm/Inventory");
  // }

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
                Edit Employee Details
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
                  height={responsive.isMobile ? "11vh" : "11vh"}
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
                  height={responsive.isMobile ? "14vh" : "8vh"}
                >
                  <Stack width={"100%"}>
                    <Typography variant="body2"> EMAIL </Typography>
                    <InputBase
                      type="text"
                      name="email"
                      // onChange={formik.handleChange}
                      // value={formik.values.Email}
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
                  height={responsive.isMobile ? "7vh" : "8vh"}
                >
                  <Stack width={"100%"}>
                    <Typography variant="body2"> Contact No</Typography>
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
                            height: "40px",
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
                  </Stack>
                </Grid>
              </Grid>
              <br />
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

              </Grid>

              <Box pt={responsive.isMobile ? 9 : 0}>
                <Button
                  // type="submit"
                  variant="outlined"
                  sx={{ textTransform: "none", mt: 2 }}
                  // onClick={onAddInventoryClick}
                >
                  Assign Inventory
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ textTransform: "none", mt: 2 ,ml:1}}
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
