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
        <Grid sx={{width : "100%" , height:"100vh" , pt:"10vh"}} justifyContent={"center"} >
            <List  sx={{overflow:"auto",width :"100%"}}>
            <ListItem sx={{pt:"20px",backgroundColor:"#fafafa"}}>
                <Typography color="primary.main" width="30%" fontWeight={350} textAlign={"center"}>DATE</Typography>
                <Typography color="primary.main" width="40%" fontWeight={350} textAlign={"center"}>DAY</Typography>
                <Typography color="primary.main" width="30%" fontWeight={350} textAlign={"center"}>OCCASION</Typography>
            </ListItem>
            <Divider/>
            {annualLeaves.map((holiday,index) => (
                <>
                <ListItem key={holiday.date} sx={{backgroundColor: "#fafafa" ,py:"12px"}}>
                    <Typography width="30%" textAlign={"center"}>{holiday.date}</Typography>
                    <Typography width="40%" textAlign={"center"}>{holiday.day}</Typography>
                    <Typography width="30%" textAlign={"center"}>{holiday.occasion}</Typography>
                </ListItem>
                <Divider/>
                </>
            ))}
            </List>
        </Grid>
    )
}
