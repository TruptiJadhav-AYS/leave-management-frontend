import {
  Grid,
  Card,
  Button,
  ListItem,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import {useSelector} from 'react-redux'
import { useGetPendingRequestQuery } from "../Store/slice/apiLeaveReqSlice";
import { useUpdateLeaveStatusMutation } from "../Store/slice/apiLeaveReqSlice";

export default function PendingReqMobile() {
  const {
    data: pendingRequest,
  } = useGetPendingRequestQuery();

  const id = useSelector((state) => state.employees.userId);

  const PendingRequestList = pendingRequest
  ? pendingRequest.filter((request) => request.emp_id !== id)
  : [];

  const [updateStatus] = useUpdateLeaveStatusMutation();

  const handleAccept = (id) => {
    updateStatus({ id: id, status: "approved" });
  };

  const handleReject = (id) => {
    updateStatus({ id: id, status: "rejected" });
  };

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split("-");
    const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    return `${day} ${monthNames[parseInt(month, 10) - 1]} ${year}`;
  };

  return (
    <>
      {/* <Typography textAlign={"left"} mx={0.5} fontWeight={"bold"}>Pending Requests</Typography> */}
      <Grid
        item
        sx={{
          width: "100%",
        }}
      >
        {PendingRequestList.map((request, index) => (
          <Card
            sx={{ my: 0.2, borderRadius: 2, width: "100%" }}
            elevation={3}
            key={index}
          >
            {/* <Button onClick={() => handleClick(request.name)} fullWidth> */}
            <ListItem alignItems="flex-start">
              <Grid container>
                <Grid item>
                  <Typography
                    variant="body1"
                    sx={{
                      textTransform: "none",
                      color: "black",
                      fontWeight: "530",
                    }}
                  >
                    {request.employeeName}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ textTransform: "none", color: "black" }}
                  >
                    {formatDate(request.start_date)} 
                    {request.toDate !== ""
                      ? " to "+formatDate(request.end_date)
                      : ""}
                  </Typography>
                  <Box style={{ minHeight: "24px" }}>
                    <Typography variant="caption">{request.reason}</Typography>
                  </Box>
                  <Stack direction={"row"}>
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      sx={{ marginRight: 1, textTransform: "none" }}
                      onClick={() => handleAccept(request.id)}
                    >
                      Accept
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      sx={{ textTransform: "none" }}
                      onClick={() => handleReject(request.id)}
                    >
                      Reject
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </ListItem>
            {/* </Button> */}
          </Card>
        ))}
      </Grid>
    </>
  );
}
