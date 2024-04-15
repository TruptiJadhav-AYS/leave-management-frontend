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

export default function PendingReqMobile() {
  const PendingRequestList = useSelector(state=>state.PendingRequests.PendingRequestList)
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
                    {request.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ textTransform: "none", color: "black" }}
                  >
                    {formatDate(request.fromDate)} 
                    {request.toDate !== ""
                      ? " to "+formatDate(request.toDate)
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
                    >
                      Accept
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      sx={{ textTransform: "none" }}
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
