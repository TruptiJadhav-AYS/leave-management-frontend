import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  Card,
  CardContent,
  Typography,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import DeleteDialouge from "./DeleteDialouge";
import { useState } from "react";
import employeeApi, {
  useDeleteEmployeeMutation,
  useGetEmployeesQuery,
  useUploadImageMutation,
} from "../Store/slice/apiEmployeeSlice";
import {
  useGetProjectsQuery,
  useAssignProjectMutation,
} from "../Store/slice/apiProjectSlice";

export default function EmployeeDetails({
  onAddOrEdit,
  openDeleteDialouge,
  onOpenDeleteDialogue,
  onCloseDeleteDialogue,
}) {
  const { data: Employees, isLoading, isError } = useGetEmployeesQuery();
  const { data: project } = useGetProjectsQuery();
  let [selectedProject, setSelectedProject] = useState("");
  const [assignProject] = useAssignProjectMutation();

  const Project = project || [];
  const selectedEmp = useSelector((state) => state.employees.selectedEmp);
  const [deleteEmployee] = useDeleteEmployeeMutation();
  const [uploadImage] = useUploadImageMutation();
  const Navigate = useNavigate();
  const index = Employees.findIndex((emp) => emp.id === selectedEmp);

  function hadleDelete() {
    deleteEmployee(selectedEmp);
    Navigate("/Employee/Employees");
  }

  const formatDate = (timestampString) => {
    const date = new Date(timestampString);
    const year = date.getFullYear();
    const day = date.getDate().toString().padStart(2, "0");

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const formattedDate = `${day} ${monthNames[date.getMonth()]} ${year}`;

    return formattedDate;
  };

  function handelAssign(projectId) {
    const projectObj = {
      employeeId: selectedEmp,
      projectId: projectId,
    };
    assignProject(projectObj);
  }

  function handleFileUpload(files) {
    // document.getElementById('fileUpload').click();

    const file = files[0]; // Assuming you want to upload only one file
    console.log(file)
    console.log(selectedEmp)
    if(file){
      uploadImage({employeeId: selectedEmp, imageData: file});
    }
  }

  // function onFileUploadClick() {
  //   document.getElementById('fileUpload').click();
  // }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100%",
        top: "10%",
      }}
    >
      <Card elevation={2} >
        <Grid display={"flex"} justifyContent={"space-between"} mx={2}>
          <Typography
            variant="h5"
            display="flex"
            justifyContent="left"
            alignItems={"left"}
            mt={3}
            width="100%"
          >
            Employee Details
          </Typography>

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Select Project</InputLabel>
            <Select
              size="small"
              onChange={(e) => setSelectedProject(e.target.value)}
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
                height: "50px",
                width: "200px",
                mr: "100px",
                borderRadius: 1,
              }}
            >
              {Project.map((project) => (
                <MenuItem key={project.id} value={project.id}>
                  {project.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button onClick={() => handelAssign(selectedProject)}>Assign</Button>
          <IconButton
            onClick={() => {
              onAddOrEdit("edit");
              Navigate("/Employee/Employees/EmployeeDetailsForm");
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              onOpenDeleteDialogue();
              // Navigate("/Employee/Employees");
            }}
          >
            <DeleteIcon />
          </IconButton>
          
        </Grid>
        <CardContent>
          <Grid
            container
            justifyContent={"space-around"}
            align={"center"}
            columnGap={12}
          >
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Avatar sx={{ width: 124, height: 124 }} src={Employees[index].image===null?"":URL.createObjectURL(
              new Blob([new Uint8Array(Employees[index].image.data)])
            )}/>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="body1" mt={8} fontWeight={"700"}>
                Name : {Employees && Employees[index] && Employees[index].name}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography
                variant="caption"
                fontWeight={"600"}
                align="left"
              >
                Email : {Employees && Employees[index] && Employees[index].email}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"}>
                Phone No : {Employees && Employees[index] && Employees[index].mobile_number}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"} align="left">
                Date Of Birth : {formatDate(Employees[index].dob)}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"} align="left">
                Gender : {Employees && Employees[index] && Employees[index].gender}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"}>
                Department : {Employees && Employees[index] && Employees[index].department?.department_name}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              {Employees[index].manager && (
                <Typography variant="caption" fontWeight={"600"}>
                  Manager Name : {Employees[index].manager?.name}
                </Typography>
              )}
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"}>
                Role : {Employees && Employees[index] && Employees[index].role}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"}>
                Projects: {Employees[index].project && Employees[index].project.map((pr, index1) => (
                  <Typography key={index} variant="caption" fontWeight={"600"}>
                    {pr.name}
                    {index1 !== Employees[index].project.length - 1 && ", "}
                  </Typography>
                ))}
                </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"}>
                Inventory :{Employees[index].inventories && Employees[index].inventories.map((inv, index1) => (
                  <Typography key={index} variant="caption" fontWeight={"600"}>
                    {inv.name}
                    {index1 !==  Employees[index].inventories.length - 1 &&  ", " }
                  </Typography>
                ))}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <DeleteDialouge
        openDeleteDialouge={openDeleteDialouge}
        onCloseDeleteDialogue={onCloseDeleteDialogue}
        handelDelete={hadleDelete}
      />
    </Box>
  );
}