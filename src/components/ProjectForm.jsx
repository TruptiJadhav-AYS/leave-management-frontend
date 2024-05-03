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
import {
  useAddProjectMutation,
  useGetProjectsQuery,
  useUpdateProjectMutation,
} from "../Store/slice/apiProjectSlice";
import { useGetEmployeesQuery } from "../Store/slice/apiEmployeeSlice";

export default function ProjectOnboardForm({ projectAddOrEdit }) {
  const responsive = UseReponsive();
  const [clickedBtnID, setClickedBtnID] = useState("");
  const [addProject] = useAddProjectMutation();
  const [updateProject] = useUpdateProjectMutation();
  const { data: employees } = useGetEmployeesQuery();
  const [onSuccess, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const {data:Projects,isSuccess} = useGetProjectsQuery();
  const selectedProject = useSelector((state) => state.Project.selectedProject);

  let index ;
  if(isSuccess){
  index = Projects.findIndex((project) => project.id === selectedProject);
  }

  console.log("pppppp",Projects)

  console.log(index)
  const Employees = employees || [];

  function handleClick(id) {
    setClickedBtnID(id);
  }

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name:
        projectAddOrEdit === "edit"
          ? selectedProject
            ? Projects[index].name
              ? Projects[index].name
              : ""
            : ""
          : "",
      manager_id:
        projectAddOrEdit === "edit"
          ? selectedProject
            ? Projects[index].manager
              ? Projects[index].manager.id
              : ""
            : ""
          :"",
      startDate:
        projectAddOrEdit === "edit"
          ? selectedProject
            ? Projects[index].startDate
              ? Projects[index].startDate
              : ""
            : ""
          : "",
      status:
        projectAddOrEdit === "edit"
          ? selectedProject
            ? Projects[index].status
              ? Projects[index].status
              : ""
            : ""
          : "",
      description:
        projectAddOrEdit === "edit"
          ? selectedProject
            ? Projects[index].description
              ? Projects[index].description
              : ""
            : ""
          : "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Project Name is required."),
      manager_id: Yup.number().required("Manager Name is required."),
      startDate: Yup.date().required("Please select a date"),
      status: Yup.string().required("Project status is required."),
      description: Yup.string(),
    }),
    onSubmit: (values) => {
      // eslint-disable-next-line no-lone-blocks
      {
        projectAddOrEdit === "add"
          ? addProject(values)
          : updateProject({
              id: selectedProject,
              updatedProjectDetails: values,
            });
      }
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
                {projectAddOrEdit === "add"
                  ? "Add Project"
                  : "Edit Project Details"}
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
                      name="name"
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
                    <Typography variant="body2"> Manager Name </Typography>

                    <Select
                      name="manager_id"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.manager.name}
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
<<<<<<< HEAD
                      {Employees.map((emp, index) => (
                        <MenuItem key={index} value={emp.name}>
=======
                     {Employees.map((emp, index) => (
                        <MenuItem key={index} value={emp.id}>
>>>>>>> origin
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
                    name="startDate"
                    lable="From Date"
                    onClick={() => {
                      handleClick("Start_date");
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.startDate}
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
                  {formik.touched.startDate && errors.startDate && (
                    <Typography variant="caption" color="error">
                      {errors.startDate}
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
                      name="status"
                      onChange={formik.handleChange}
                      value={formik.values.status}
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
                      <MenuItem value="active">active</MenuItem>
                      <MenuItem value="inactive">inactive</MenuItem>
                    </Select>
                    {formik.touched.status && errors.status && (
                      <Typography variant="caption" color="error">
                        {errors.status}
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
                      name="description"
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
                      value={formik.values.description}
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
                {projectAddOrEdit === "add" ? "Onboard Project" : "Submit"}
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
            {projectAddOrEdit === "add"
              ? "Project added successfully."
              : "Project Edited Successfully"}
          </Alert>
        )}
      </Stack>
    </Grid>
  );
}
