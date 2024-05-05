import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import DeleteDialouge from "./DeleteDialouge";
import { useState } from "react";
import { useParams } from "react-router-dom";
import employeeApi, {
  useGetEmployeesByIdQuery,
  useDeleteEmployeeMutation,
} from "../Store/slice/apiEmployeeSlice";
import {
  useGetProjectsQuery,
  useAssignProjectMutation,
} from "../Store/slice/apiProjectSlice";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import PeopleIcon from "@mui/icons-material/People";

export default function EmployeeDetails({
  onAddOrEdit,
  openDeleteDialouge,
  onOpenDeleteDialogue,
  onCloseDeleteDialogue,
}) {
  const { id } = useParams();
  const selectedEmp = parseInt(id);

  const {
    data: Employee,
    isLoading,
    isError,
  } = useGetEmployeesByIdQuery(selectedEmp);
  const { data: project } = useGetProjectsQuery();
  let [selectedProject, setSelectedProject] = useState("");
  const [assignProject] = useAssignProjectMutation();

  const Project = project || [];
  const [deleteEmployee] = useDeleteEmployeeMutation();
  const Navigate = useNavigate();

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

  if (isLoading) {
    return <></>;
  }
  if (isError) {
    return <></>;
  }

  return (
    <Box
      sx={{
        p: 1,
      }}
    >
      <Card elevation={3} sx={{ display: "flex", marginBottom: 1 }}>
        <CardContent>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack>
              <Typography
                fontWeight="700"
                variant="h6"
                ml={20}
                width="150px"
                textAlign={"left"}
              >
                {Employee.name}
              </Typography>
            </Stack>

            <Stack direction={"row"}>
              <EditIcon
                sx={{ mx: 0.5 }}
                onClick={() => {
                  onAddOrEdit("edit");
                  Navigate("/Employee/Employees/EmployeeDetailsForm");
                }}
              />
              <DeleteIcon
                sx={{ mx: 0.5 }}
                onClick={() => {
                  onOpenDeleteDialogue();
                }}
              />
            </Stack>
          </Stack>

          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Avatar
                sx={{ width: 124, height: 124, mt: -3 }}
                src={
                  Employee.image === null
                    ? ""
                    : URL.createObjectURL(
                        new Blob([new Uint8Array(Employee.image.data)])
                      )
                }
                alt="Profile"
              />
            </Grid>

            <Grid item ml={2} textAlign={"left"}>
              <Box display={"flex"} gap={0.5} flexDirection={"row"}>
                <MailIcon sx={{ height: "20px", mt: 0.2 }} />
                <Typography color="body2">{Employee.email}</Typography>
              </Box>
              <Box display={"flex"} gap={0.5} flexDirection={"row"}>
                <CallIcon sx={{ height: "20px" }} />
                <Typography variant="body2">
                  {Employee.mobile_number}
                </Typography>
              </Box>
              <Box display={"flex"} gap={0.5} flexDirection={"row"}>
                <PeopleIcon />
                <Typography variant="body1">
                  {Employee.department
                    ? Employee.department.department_name
                    : "-"}
                </Typography>
              </Box>
            </Grid>
            <Grid item textAlign={"left"} ml={2}>
            {Employee.manager && (
                <Typography variant="body1">
                  Manager : {Employee.manager.name}
                </Typography>
              )}
              <Typography variant="body1">Gender: {Employee.gender}</Typography>
              <Typography variant="body1">
                Date Of Birth: {formatDate(Employee.dob)}
              </Typography>
              <Typography variant="body1">Role: {Employee.role}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Grid container spacing={1} height={"60vh"}>
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ height: "100%" }}>
            <Typography variant="h6" p={1}>
              Projects
            </Typography>

            <Divider />
            <Stack direction={"column"}justifyContent={"space-between"} >
            <Stack height={"250px"}>
              <List sx={{ overflowY: "auto", maxHeight: "260px" }}>
                {Employee.project &&
                  Employee.project.map((Project, index) => (
                    <Box>
                      <ListItem
                        key={index}
                        variant="body1"
                        sx={{ px: 2, py: 1.3 }}
                      >
                        <ListItemText>{Project.name}</ListItemText>
                        <Box
                          sx={{
                            bgcolor:
                              Project.status === "active"
                                ? "#CCFFCC"
                                : "#D3D3D3",
                            color:
                              Project.status === "active" ? "008800" : "gray",
                            width: "60px",
                            p: "1px",
                            borderRadius: "6px",
                            textAlign: "center",
                            fontSize: "12px",
                          }}
                        >
                          {Project.status.charAt(0).toUpperCase() +
                            Project.status.slice(1)}
                        </Box>
                      </ListItem>
                      {index !== Employee.project.length - 1 && <Divider />}
                    </Box>
                  ))}
              </List>
            </Stack>
            
            <Stack>
            <Grid item display={"flex"} mx={2} alignItems={"center"}>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-select-small-label">Assign Project</InputLabel>
                <Select
                  size="small"
                  labelId="demo-select-small-label"
                  id="demo-select-small"
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
                    width: "200px",
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

              <CheckIcon
                onClick={() => handelAssign(selectedProject)}
                sx={{
                  color: "black",
                  border: "2px solid rgba(204, 204, 204, 0.5)",
                  borderRadius: 5,
                  bgcolor: "lightblue",
                }}
              />
            </Grid>
            </Stack>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ height: "100%" }}>
            <Typography variant="h6" p={1}>
              Inventory
            </Typography>
            <Divider />
            <List sx={{ overflowY: "auto", maxHeight: "260px" }}>
              {Employee.inventories &&
                Employee.inventories.map((inventory, index) => (
                  <div key={index}>
                    <ListItem sx={{ px: 2, pb: 0.5, pt: 0.2 }}>
                      <Box display={"flex"} flexDirection={"column"}>
                        <Typography variant="subtitle1">
                          {inventory.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Serial Number : {inventory.serial_number}
                        </Typography>
                      </Box>
                    </ListItem>
                    {index !== Employee.inventories.length - 1 && <Divider />}
                  </div>
                ))}
            </List>
          </Card>
        </Grid>
      </Grid>
      {/* <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"}>
                Projects: {Employee.project && Employee.project.map((pr, index1) => (
                  <Typography key={Employee.id} variant="caption" fontWeight={"600"}>
                    {pr.name}
                    {index1 !== Employee.project.length - 1 && ", "}
                  </Typography>
                ))}
                </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"}>
                Inventory :{Employee.inventories && Employee.inventories.map((inv, index1) => (
                  <Typography key={Employee.id} variant="caption" fontWeight={"600"}>
                    {inv.name}
                    {index1 !==  Employee.inventories.length - 1 &&  ", " }
                  </Typography>
                ))}
              </Typography>
            </Grid> */}
      {/* </Grid>
        </CardContent>
      </Card> */}
      <DeleteDialouge
        openDeleteDialouge={openDeleteDialouge}
        onCloseDeleteDialogue={onCloseDeleteDialogue}
        handelDelete={hadleDelete}
      />
    </Box>
  );
}
