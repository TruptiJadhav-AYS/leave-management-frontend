import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add"

export default function EmployeeList() {
  let Navigate = useNavigate();

  const employeeList = [
    { Name: "Pruthviraj Suryawanshi", Role: "Employee", Gender: "Male" },
    { Name: "Pratiksha Nimbalkar", Role: "Employee", Gender: "Female" },
    { Name: "Trupti Jadhav", Role: "Employee", Gender: "Female" },
    { Name: "Ketan Rathod", Role: "Manager", Gender: "Male" },
    { Name: "Yogesh Patel", Role: "Admin", Gender: "Male" },
    { Name: "Nupur Tyagi", Role: "Employee", Gender: "Female" },
    { Name: "Mehvish Shaikh", Role: "Employee", Gender: "Female" },
    { Name: "Abhinandan Ambekar", Role: "Employee", Gender: "Male" },
  ];
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        px: "10%",
        pt: "14vh",
        width: "100%",
        textAlign: "center",
      }}
    >
      <List sx={{ overflow: "auto", width: "100%" }}>
        <ListItem sx={{ pt: "20px", backgroundColor: "#fafafa" }}>
          <Typography color="primary.main" width="40%" fontWeight={350} pl={2}>
            NAME
          </Typography>
          <Typography
            color="primary.main"
            width="30%"
            fontWeight={350}
            pl={0.9}
          >
            GENDER
          </Typography>
          <Typography
            color="primary.main"
            width="30%"
            fontWeight={350}
            pl={1.7}
          >
            ROLE
          </Typography>
        </ListItem>
        <Divider />
        {employeeList.map((employee, index) => (
          <ListItem key={index} sx={{ backgroundColor: "#fafafa", py: "12px" }}>
            <Typography width="40%" pl={1} textAlign={"left"}>
              {employee.Name}
            </Typography>
            <Typography width="30%" pl={1} textAlign={"left"}>
              {employee.Gender}
            </Typography>
            <Typography width="30%" pl={1} textAlign={"left"}>
              {employee.Role}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        onClick={() => {
          Navigate("/Employee/Employees/NewRegistration");
        }}
      >
        Employee
        <AddIcon/>
      </Button>
    </Box>
  );
}
