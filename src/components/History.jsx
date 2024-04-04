import {Grid,Typography} from "@mui/material"

export default function History(){
    return(
        <Grid container pt="15vh" justifyContent={"center"}>
            <Grid item xs={12} sm={6}>
                <Typography color="grey">No History Found</Typography>
            </Grid>
        </Grid>
    )
}