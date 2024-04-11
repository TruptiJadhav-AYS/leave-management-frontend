import { Box, Typography, Grid, Card, Stack } from "@mui/material";

const History = [
  {
    Start_Date: "06/04/2024",
    End_Date: "07/05/2024",
    leave_type: "Full Day",
    reason: "Suffering from fever",
    status: "Pending",
  },
  {
    Start_Date: "12/03/2024",
    End_Date: "14/03/2024",
    leave_type: "Full Day",
    reason: "Family function",
    status: "Accepted",
  },
  {
    Start_Date: "12/03/2024",
    End_Date: "14/03/2024",
    leave_type: "Full Day",
    reason: "Scheduled exams",
    status: "Accepted",
  },
  {
    Start_Date: "10/02/2024",
    End_Date: "",
    leave_type: "Half Day",
    reason: "Shceduled doctors appointment",
    status: "Accepted",
  },
  {
    Start_Date: "12/01/2024",
    End_Date: "14/01/2024",
    leave_type: "Full Day",
    reason: "Family emergency",
    status: "Rejected",
  },
  {
    Start_Date: "09/12/2023",
    End_Date: "10/12/2023",
    leave_type: "Full Day",
    reason: "Scheduled dentist appointment",
    status: "Accepted",
  },
  {
    Start_Date: "25/11/2023",
    End_Date: "",
    leave_type: "Half Day",
    reason: "Attending conference ",
    status: "Accepted",
  },
  {
    Start_Date: "15/11/2023",
    End_Date: "17/11/2023",
    leave_type: "Full Day",
    reason: "Vacation",
    status: "Rejected",
  },
  {
    Start_Date: "10/11/2023",
    End_Date: "",
    leave_type: "Half Day",
    reason: "Personal errands",
    status: "Accepted",
  },
  {
    Start_Date: "05/11/2023",
    End_Date: "07/11/2023",
    leave_type: "Full Day",
    reason: "Attending workshop",
    status: "Accepted",
  },
  {
    Start_Date: "28/10/2023",
    End_Date: "29/10/2023",
    leave_type: "Full Day",
    reason: "Team building activity",
    status: "Accepted",
  },
  {
    Start_Date: "20/10/2023",
    End_Date: "",
    leave_type: "Half Day",
    reason: "Doctor's appointment",
    status: "Accepted",
  },
  {
    Start_Date: "15/10/2023",
    End_Date: "",
    leave_type: "Half Day",
    reason: "Attending seminar",
    status: "Accepted",
  },
  {
    Start_Date: "10/10/2023",
    End_Date: "12/10/2023",
    leave_type: "Full Day",
    reason: "Personal travel",
    status: "Accepted",
  },
  {
    Start_Date: "05/10/2023",
    End_Date: "",
    leave_type: "Half Day",
    reason: "Parent-teacher meeting",
    status: "Rejected",
  },
  {
    Start_Date: "25/09/2023",
    End_Date: "",
    leave_type: "Half Day",
    reason: "Attending training session",
    status: "Accepted",
  },
];
export default function HistoryMobile() {
  const formatDate = (dateString) => {
    const [day, month] = dateString.split('/');
    const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  
    return `${day} ${monthNames[parseInt(month, 10) - 1]}`;
  };
  

  return (
    <Grid m={1} mt={2}>
      {History.map((history, index) => (
        <Card
          key={index}
          sx={{
            my: 0.5,
            py: 1.5,
            px:2,
            borderRadius: "15px",
          }}
        >
          <Stack
            direction={"column"}
          >
            <Stack justifyContent={"space-between"} direction={"row"}>
            <Typography variant="body2" color="grey">
                {history.leave_type}
            </Typography>
              <Box
                width="80px"
                borderRadius={"6px"}
                py={0.2}
                px={0.1}
                color="white"
                bgcolor={
                  history.status === "Accepted"
                    ? "#CCFFCC"
                    : history.status === "Pending"
                    ? "#FFD699"
                    : "#FFCCCC"
                }
              >
                  <Typography variant="body2" color={history.status === "Accepted"
                    ? "darkgreen"
                    : history.status === "Pending"
                    ? "#7B3F00"
                    : "darkred"}>{history.status}</Typography>
              </Box>
              </Stack>
              <Stack direction={"column"} textAlign={"left"}> 
              <Typography variant="body" sx={{ fontWeight: "bold" }}>{formatDate(history.Start_Date)}{history.End_Date!=="" ? " - "+formatDate(history.End_Date) : ""}</Typography>
              <Typography variant="caption" color="grey">{history.reason}</Typography>
              </Stack>
            </Stack>
        </Card>
      ))}
    </Grid>
  );
}
