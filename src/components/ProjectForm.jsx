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
import addProjectAction from "../Store/action/AddProjectAction";
import { useDispatch, useSelector } from "react-redux";
import editProjectAction from "../Store/action/EditProjectAction";

export default function ProjectOnboardForm({projectAddOrEdit}) {
  const responsive = UseReponsive();
  const [clickedBtnID, setClickedBtnID] = useState("");
  const [onSuccess, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const Projects = useSelector((state) => state.Project.Projects);
  const selectedProject = useSelector((state) => state.Project.selectedProject);
  const index = Projects.findIndex((project) => project.Id === selectedProject);

  let { Employees } = useSelector((state) => state.employees);
  let projectManagerList=[]

  for (let i in Employees) {
    if (Employees[i].name) {
      projectManagerList.push(Employees[i].name); 
    }
  }

  function handleClick(id) {
    setClickedBtnID(id);
  }

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      Name: projectAddOrEdit === "edit"
      ? selectedProject
        ? Projects[index].Name
          ? Projects[index].Name
          : ""
        : ""
      : "",
      Project_Manager:  projectAddOrEdit === "edit"
      ? selectedProject
        ? Projects[index].Project_Manager
          ? Projects[index].Project_Manager
          : ""
        : ""
      : "",
      Start_date: projectAddOrEdit === "edit"
      ? selectedProject
        ? Projects[index].Start_date
          ? Projects[index].Start_date
          : ""
        : ""
      : "",
      Status: projectAddOrEdit === "edit"
      ? selectedProject
        ? Projects[index].Status
          ? Projects[index].Status
          : ""
        : ""
      : "",
      Description: projectAddOrEdit === "edit"
      ? selectedProject
        ? Projects[index].Description
          ? Projects[index].Description
          : ""
        : ""
      : "",
    },
    validationSchema: Yup.object({
      Name: Yup.string().required("Project Name is required."),
      Project_Manager: Yup.string().required("Manager Name is required."),
      Start_date: Yup.date().required("Please select a date"),
      Status: Yup.string().required("Project status is required."),
      Description:Yup.string()
    }),
    onSubmit: (values) => {
      console.log(values)
      {projectAddOrEdit==="add" ?
      dispatch(addProjectAction(values)) : dispatch(editProjectAction(values))}
      setSuccess(true);
      setTimeout(() => {
        navigate("/Employee/Projects");
      }, 1000);
    },
  });

  const errors = formik.errors;
  
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 220,
        width: 250,
      },
    },
  };

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
                {projectAddOrEdit==="add" ?
                "Add Project" : "Edit Project Details"}
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
                      name="Name"
                      sx={{
                        border:
                          clickedBtnID === "Name"
                            ? "2px solid blue"
                            : "2px solid rgba(204, 204, 204, 0.5)",
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
                    <Typography variant="body2"> Manager Name </Typography>
                    {/* <InputBase
                      placeholder="Manager Name"
                      type="text"
                      name="Project_Manager"
                      sx={{
                        border:
                          clickedBtnID === "Project_Manager"
                            ? "2px solid blue"
                            : "2px solid rgba(204, 204, 204, 0.5)",
                        height: "40px",
                        borderRadius: 1,
                      }}
                      onClick={() => handleClick("Project_Manager")}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.Project_Manager}
                    /> */}
                    <Select name="Project_Manager"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Project_Manager}
                    size="small"
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
                    {projectManagerList.map((manager,index) => (
                        <MenuItem key={index} value={manager}>
                          {manager}
                        </MenuItem>
                      ))}
                    </Select>
                    {formik.touched.Project_Manager &&
                      errors.Project_Manager && (
                        <Typography variant="caption" color="error">
                          {errors.Project_Manager}
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
                  height={responsive.isMobile ? "17vh" : "11vh"}
                >
                  <Typography variant="body2">Start date</Typography>
                  <InputBase
                    onChange={formik.handleChange}
                    type="date"
                    name="Start_date"
                    lable="From Date"
                    onClick={() => {
                      handleClick("Start_date");
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.Start_date}
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
                  {formik.touched.Start_date && errors.Start_date && (
                    <Typography variant="caption" color="error">
                      {errors.Start_date}
                    </Typography>
                  )}
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
                    <Typography variant="body2"> Status</Typography>
                    <Select
                      size="small"
                      name="Status"
                      onChange={formik.handleChange}
                      value={formik.values.Status}
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
                      onBlur={formik.handleBlur}
                    >
                      <MenuItem value="Active">Active</MenuItem>
                      <MenuItem value="Inactive">Inactive</MenuItem>
                    </Select>
                    {formik.touched.Status && errors.Status && (
                      <Typography variant="caption" color="error">
                        {errors.Status}
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
                  height={responsive.isMobile ? "11vh" : "11vh"}
                  // height={"12vh"}
                >
                  <Stack width={"100%"}>
                    <Typography variant="body2"> Description </Typography>
                    <InputBase
                      placeholder="Description"
                      type="text"
                      name="Description"
                      sx={{
                        border:
                          clickedBtnID === "Description"
                            ? "2px solid blue"
                            : "2px solid rgba(204, 204, 204, 0.5)",
                        height: "40px",
                        borderRadius: 1,
                      }}
                      onClick={() => handleClick("Description")}
                      onChange={formik.handleChange}
                      value={formik.values.Description}
                    />
                  </Stack>
                </Grid>
              </Grid>

              <br />
              <Button
                type="submit"
                variant="contained"
                sx={{ textTransform: "none", mt: 2 }}
              >
                {projectAddOrEdit==="add" ?
                "Onboard Project" : "Submit"}
              </Button>
            </form>
          </CardContent>
        </Card>
        {onSuccess && (
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            sx={{ height: "50px", mt: "10px" }}
            severity="success"
          >
            {projectAddOrEdit==="add" ? "Project added successfully." : "Project Edited Successfully"}
            
          </Alert>
        )}
      </Stack>
    </Grid>
  );
}
