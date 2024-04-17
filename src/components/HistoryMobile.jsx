import { Box, Typography, Grid, Card, Stack } from "@mui/material";
import { useSelector } from "react-redux";

export default function HistoryMobile() {
  const LeaveHistory = useSelector((state) => state.leaveHistory.LeaveHistory);
  const formatDate = (dateString) => {
    const [day, month] = dateString.split("/");
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

    return `${day} ${monthNames[parseInt(month, 10) - 1]}`;
  };

  return (
    <Grid m={1} mt={2}>
      {LeaveHistory.map((history, index) => (
        <Card
          key={index}
          sx={{
            my: 0.5,
            py: 1.5,
            px: 2,
            borderRadius: "15px",
          }}
        >
          <Stack direction={"column"}>
            <Stack justifyContent={"space-between"} direction={"row"}>
              <Typography variant="body2" color="grey">
                {history.leave_type}
              </Typography>
              <Box
                width="60px"
                borderRadius={"6px"}
                py={0.1}
                px={0.1}
                color="white"
                bgcolor={
                  history.status === "Accepted"
                    ? "#CCFFCC"
                    : history.status === "Pending"
                    ? "#FFD699"
                    : "#D3D3D3"
                }
                sx={{alignContent:"center"}}
              >
                <Typography
                  fontSize={"12px"}
                  color={
                    history.status === "Accepted"
                      ? "darkgreen"
                      : history.status === "Pending"
                      ? "#7B3F00"
                      : "gray"
                  }
                >
                  {history.status}
                </Typography>
              </Box>
            </Stack>
            <Stack direction={"column"} textAlign={"left"}>
              <Typography variant="body" sx={{ fontWeight: "bold" }}>
                {formatDate(history.Start_Date)}
                {history.End_Date !== ""
                  ? " - " + formatDate(history.End_Date)
                  : ""}
              </Typography>
              <Typography variant="caption" color="grey">
                {history.reason}
              </Typography>
            </Stack>
          </Stack>
        </Card>
      ))}
    </Grid>
  );
}
