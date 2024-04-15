import {Card,Grid,Typography} from "@mui/material"

export function LeaveBalanceMobile(){
    return(
    <Grid container width="100%" pt={2}>
        <Card sx={{borderRadius:"20px",px:1,py:0.4,width:"100%"}}>
            <Grid display={"flex"} item xs={12} justifyContent="center" flexDirection={"row"} px={1} py={1.5}>
                <Grid item xs={4} sx={{borderRight:"2px solid rgba(204, 204, 204, 0.5)",px:1}}>
                <Typography sx={{height:28,fontSize:"16px"}}>Remaining Leaves</Typography>
                <Typography sx={{mt:2.5,fontWeight:"bold"}}>9 / 21</Typography>
                </Grid>

                <Grid item xs={4} sx={{borderRight:"2px solid rgba(204, 204, 204, 0.5)"}}>
                <Typography sx={{height:28,fontSize:"16px"}}>Work From Home</Typography>
                <Typography sx={{mt:2.5,fontWeight:"bold"}}>9 / 21</Typography>
                </Grid>

                <Grid item xs={4} px={1}>
                <Typography sx={{height:28,fontSize:"16px"}}>Annual Leaves</Typography>
                <Typography sx={{mt:2.5,fontWeight:"bold"}}>9 / 21</Typography>
                </Grid>
            </Grid>
        </Card>
    </Grid>
    )
}