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

export default function EditEmployeeForm() {
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

  // function onAddInventoryClick() {
  //   navigate("/Employee/Employees/EditForm/Inventory");
  // }

  function handleSubmit() {
    setOnBoardSuccess(true);
    setTimeout(() => {
      navigate("/Employee/Projects");
    }, 1000);
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
            <form>
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
                    />
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
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                    </Select>
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
                      type="email"
                      name="Email"
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
                      // onBlur={formik.handleBlur}
                    />
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
                      name="Contact"
                      placeholder=" Phone Number"
                      // onChange={formik.handleChange}
                      // value={formik.values.Contact}
                      sx={{
                        border:
                          clickedBtnID === "Contact"
                            ? "2px solid blue"
                            : "2px solid  rgba(204, 204, 204, 0.5)",
                        height: "40px",
                        borderRadius: 1,
                      }}
                      onClick={() => handleClick("Contact")}
                      // onBlur={formik.handleBlur}
                    />
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
                      name="Department"
                      // onChange={formik.handleChange}
                      // value={formik.values.Department}
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
                      // onBlur={formik.handleBlur}
                    >
                      <MenuItem value="Human Resource">Human Resource</MenuItem>
                      <MenuItem value="Support">Support</MenuItem>
                      <MenuItem value="Developement">Developement</MenuItem>
                      <MenuItem value="Finance">Finance</MenuItem>
                    </Select>

                    {/* {formik.touched.Department && errors.Department && (
                    <Typography variant="caption" color="error">
                      {errors.Department}
                    </Typography>
                  )} */}
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
                      name="Manager"
                      // onChange={formik.handleChange}
                      // value={formik.values.Manager}
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

              <Box pt={responsive.isMobile ? 9 : 0} spacing={1}>
                <Button
                  // type="submit"
                  variant="outlined"
                  sx={{ textTransform: "none", mt: 2 }}
                  // onClick={onAddInventoryClick}
                >
                  Assign Inventory
                </Button>
                <Button
                  // type="submit"
                  variant="contained"
                  sx={{ textTransform: "none", mt: 2 ,ml:1}}
                  onClick={handleSubmit}
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
