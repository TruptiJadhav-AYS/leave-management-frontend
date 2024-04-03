import {Grid,List,Typography } from '@mui/material'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

const annualLeaves=[
    {date:"01/01/2024",day:"Monday",occasion:"New Yaar"},
    {date:"26/01/2024",day:"Friday",occasion:"Republic Day"},
    {date:"25/03/2024",day:"Monday",occasion:"Holi"},
    {date:"01/05/2024",day:"Wednesday",occasion:"May Day"},
    {date:"15/08/2024",day:"Thursday",occasion:"Inependence Day"},
    {date:"07/09/2024",day:"Saturday",occasion:"Ganesh Chaturthi"},
    {date:"02/10/2024",day:"Wednesday",occasion:"Mahatma Gandhi Jayanti"},
    {date:"12/10/2024",day:"Saturday",occasion:"Dusshera"},
    {date:"01/11/2024",day:"Friday",occasion:"Diwali"},
    {date:"25/12/2024",day:"Wednesday",occasion:"Christmas Day"}
]

export default function Holidays(){
    return(
        <Grid
        container
        justifyContent={"center"}
        >
        <Grid item sx={{ height:"100vh" , pt:"10vh"}}  xs={12} sm={6}>
            <List  sx={{overflow:"auto",width :"100%"}}>
            {annualLeaves.map((holiday,index) => (
                <ListItem key={index} sx={{backgroundColor: "#fafafa" ,py:"12px",borderRadius:"10px",m:"3px"}}>
                    <Typography width="40%" textAlign={"center"}>{holiday.date}<br/>{holiday.day}</Typography>
                    <Typography width="50%" textAlign={"center"}>{holiday.occasion}</Typography>
                </ListItem>
            ))}
            </List>
        </Grid>
        </Grid>
    )
}
