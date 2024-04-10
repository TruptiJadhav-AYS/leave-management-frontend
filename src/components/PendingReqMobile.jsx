import {Grid,Card,Button,ListItem,Typography,Stack, Box} from "@mui/material"

const PendingRequest = [
 {
    name:"Pratiksha",
    from_date:"10-04-2024",
    to_date:"10-04-2024",
    leave_type:"Half Day",
    reason:"Doctor appointment"
 },
  {
    name:"Trupti",
    from_date:"10-04-2024",
    to_date:"10-04-2024",
    leave_type:"Half Day",
    reason:""
  },
 {
    name:"Pruthvi",
    from_date:"10-04-2024",
    to_date:"10-04-2024",
    leave_type:"Half Day",
    reason:"Doctor appointment"
  },
 {
    name:"Prerana",
    from_date:"10-04-2024",
    to_date:"10-04-2024",
    leave_type:"Half Day",
    reason:"Doctor appointment"
 },
  {
    name:"Priya",
    from_date:"10-04-2024",
    to_date:"10-04-2024",
    leave_type: "Half Day",
    reason:"Doctor appointment"
  },
  {
    name:"Siya",
    from_date:"10-04-2024",
    to_date:"10-04-2024",
    leave_type:"Half Day",
    reason:"Doctor appointment"
  },
];

export default function PendingReqMobile() {
  return (
    <>
    {/* <Typography textAlign={"left"} mx={0.5} fontWeight={"bold"}>Pending Requests</Typography> */}
    <Grid
      item
      sx={{
        width: "100%",
      }}
    >
      {PendingRequest.map((request,index) => (
        <Card sx={{ my: 0.2, borderRadius: 2,width:"100%" }} elevation={3} key={index}>
          {/* <Button onClick={() => handleClick(request.name)} fullWidth> */}
            <ListItem alignItems="flex-start">
              <Grid container >
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
                    {request.from_date} to {request.to_date}
                  </Typography>
                  <Box style={{ minHeight: "24px" }}>
                  <Typography
                    variant="caption">
                    {request.reason}
                  </Typography>
                  </Box>
                  <Stack direction={"row"}>
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    sx={{ marginRight: 1 ,textTransform:"none"}}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    sx={{textTransform:"none"}}
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
