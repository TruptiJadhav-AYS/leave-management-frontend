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
    Box
  } from "@mui/material";
  import Card from "@mui/material/Card";
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import UseReponsive from "../hooks/UseResponsive";
  // import * as Yup from "yup";
  // import { useFormik } from "formik";
  import CheckIcon from "@mui/icons-material/Check";
  
  export default function EditProjectForm() {
    const responsive = UseReponsive();
    const [clickedBtnID, setClickedBtnID] = useState("");
    const [onBoardSuccess, setOnBoardSuccess] = useState(false);
  
    function handleClick(id) {
      setClickedBtnID(id);
    }
  
    const navigate = useNavigate();
  
    // const formik = useFormik({
    //   initialValues: {
    //     projectName: "",
    //     managerName: "",
    //     fromDate: "",
    //     toDate: "",
    //     status: "",
    //   },
    //   validationSchema: Yup.object({
    //     projectName: Yup.string().required("Project Name is required."),
    //     managerName: Yup.string().required("Manager Name is required."),
    //     fromDate: Yup.date().required("Please select a date"),
    //     toDate: Yup.date().required("Please select a date"),
    //     status: Yup.string().required("Project status is required."),
    //   }),
    //   onSubmit: (values) => {
    //     console.log(values);
    //     setOnBoardSuccess(true);
    //     setTimeout(() => {
    //       navigate("/Employee/Projects");
    //     }, 1000);
    //   },
    // });
  
    // const errors = formik.errors;

    function handleSubmit(){
        setOnBoardSuccess(true)
        setTimeout(() => {
          navigate("/Employee/Projects")
        }, 1000);
        
    }
  
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
              <form >
                <Typography color={"primary"} variant="h5" mb={2}>
                  Edit Project Details
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
                      <Typography variant="body2"> Project Name</Typography>
                      <InputBase
                        placeholder="Project Name"
                        type="text"
                        name="projectName"
                        sx={{
                          border:
                            clickedBtnID === "projectName"
                              ? "2px solid blue"
                              : "2px solid rgba(204, 204, 204, 0.5)",
                          height: "40px",
                          borderRadius: 1,
                        }}
                        onClick={() => handleClick("projectName")}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.projectName}
                      />
                      {/* {formik.touched.projectName && errors.projectName && (
                        <Typography variant="caption" color="error">
                          {errors.projectName}
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
                    height={responsive.isMobile ? "11vh" : "11vh"}
                  >
                    <Stack width={"100%"}>
                      <Typography variant="body2"> Manager Name </Typography>
                      <InputBase
                        placeholder="Manager Name"
                        type="text"
                        name="managerName"
                        sx={{
                          border:
                            clickedBtnID === "managerName"
                              ? "2px solid blue"
                              : "2px solid rgba(204, 204, 204, 0.5)",
                          height: "40px",
                          borderRadius: 1,
                        }}
                        onClick={() => handleClick("managerName")}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.managerName}
                      />
                      {/* {formik.touched.managerName && errors.managerName && (
                        <Typography variant="caption" color="error">
                          {errors.managerName}
                        </Typography>
                      )} */}
                    </Stack>
                  </Grid>
                </Grid>
                <br />
                <Grid container spacing={1}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    height={responsive.isMobile ? "17vh" : "11vh"}
                  >
                    <Typography fontSize={"13px"}>START DATE</Typography>
                    <InputBase
                    //   onChange={formik.handleChange}
                    //   value={formik.values.fromDate}
                      type="date"
                      name="fromDate"
                      lable="From Date"
                      onClick={() => {
                        handleClick("fromDate");
                      }}
                    //   onBlur={formik.handleBlur}
                      sx={{
                        border:
                          clickedBtnID === "fromDate"
                            ? "2px solid blue"
                            : "2px solid rgba(204, 204, 204, 0.5)",
                        borderRadius: "4px",
                        p: "4px",
                        width: "100%",
                      }}
                    />
                    {/* {formik.touched.fromDate && errors.fromDate && (
                      <Typography variant="caption" color="error">
                        {errors.fromDate}
                      </Typography>
                    )} */}
                  </Grid>
  
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    height={responsive.isMobile ? "17vh" : "15vh"}
                  >
                    <Typography fontSize={"13px"}>END DATE</Typography>
                    <InputBase
                    //   value={formik.values.toDate}
                    //   onChange={formik.handleChange}
                      type="date"
                      name="toDate"
                      lable="To Date"
                      onClick={() => {
                        handleClick("toDate");
                      }}
                    //   onBlur={formik.handleBlur}
                      sx={{
                        border:
                          clickedBtnID === "toDate"
                            ? "2px solid blue"
                            : "2px solid rgba(204, 204, 204, 0.5)",
                        borderRadius: "4px",
                        p: "4px",
                        width: "100%",
                      }}
                    />
  
                    {/* {formik.touched.toDate && errors.toDate && (
                      <Typography variant="caption" color="error">
                        {errors.toDate}
                      </Typography>
                    )} */}
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={6}
                    height={responsive.isMobile ? "11vh" : "11vh"}
                  >
                    <Stack width={"100%"}>
                      <Typography variant="body2"> Status</Typography>
                      <Select
                        size="small"
                        name="status"
                        // onChange={formik.handleChange}
                        // value={formik.values.status}
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
                        onClick={() => handleClick("status")}
                        // onBlur={formik.handleBlur}
                      >
                        <MenuItem value="active">Active</MenuItem>
                        <MenuItem value="inactive">Inactive</MenuItem>
                      </Select>
                      {/* {formik.touched.status && errors.status && (
                        <Typography variant="caption" color="error">
                          {errors.status}
                        </Typography>
                      )} */}
                    </Stack>
                  </Grid>
                </Grid>
  
                <br />
                <Box>
              <Button
                // type="submit"
                variant="contained"
                sx={{ textTransform: "none",mt:2}}
                // onClick={onAddInventoryClick}
              >
                Add Employee
              </Button>
              <Button
                // type="submit"
                variant="contained"
                sx={{ textTransform: "none",mt:2,ml:1}}
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
              Project Edited successfully.
            </Alert>
          )}
        </Stack>
      </Grid>
    );
  }
  