import {
    Grid,
    Typography,
    Card,
    CardContent,
    
  } from "@mui/material";
  
  export default function Dashboard({role}) {
    return (
      <Grid
        container
        height={"100vh"}
        justifyContent="center"
        alignItems={"center"}
        width="100%"
        sx={{ minHeight: "100vh" }}
        pt={7.9}
      >
        <Grid item xs={12} sm={8} pt={1.5}>
          <Typography fontSize={"25px"} color={"primary"}>
            Welcome, User name!!
          </Typography>
        </Grid>

        <Grid container spacing={2} p={2}>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card elevation={8}>
              <CardContent>
                <Typography fontWeight={"bold"} fontSize={"20px"}>
                  Leave Balance
                </Typography>
              </CardContent>
              <CardContent>Annual Leaves</CardContent>
              <CardContent>Earned Leaves</CardContent>
              <CardContent>Total Leaves</CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card elevation={8} height={"20vh"}>
              <CardContent>
                <Typography fontWeight={"bold"} fontSize={"20px"}>
                  Upcoming Holidays
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        

        <Grid container spacing={2} p={2}>
          {role==="Admin" || role==="Manager" ?
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card elevation={8}>
              <CardContent>
                <Typography fontWeight={"bold"} fontSize={"20px"}>
                  Pending Requests
                </Typography>
              </CardContent>
            </Card>
          </Grid> 
          : <></>}
          </Grid>
        
        </Grid>
      
    );
  }
  