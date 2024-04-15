import {
  Button,
  CardContent,
  Grid,
  InputBase,
  Stack,
  Typography,
  MenuItem,
  Select,
  Alert,
} from "@mui/material";
import Card from "@mui/material/Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseReponsive from "../hooks/UseResponsive";
import * as Yup from "yup";
import { useFormik } from "formik";
import CheckIcon from "@mui/icons-material/Check";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import {useDispatch} from 'react-redux'
import addHol from "../Store/action/AddHolidayAction";

export default function AddHolidayForm() {
  const responsive = UseReponsive();
  const dispatch=useDispatch();

  const [clickedBtnID, setClickedBtnID] = useState("");
  const [onBoardSuccess, setOnBoardSuccess] = useState(false);

  function handleClick(id) {
    setClickedBtnID(id);
  }
  const navigate = useNavigate();
  function formatDate(dateStr) {
    // Assuming dateStr is in "YYYY-MM-DD" format
    const parts = dateStr.split('-'); // split the date into an array [YYYY, MM, DD]
    return `${parts[2]}-${parts[1]}-${parts[0]}`; // rearrange to "DD-MM-YYYY"
}

  const formik = useFormik({
    initialValues: {
    //   holidayName: "",
    occasion: "",
      date: "",
      day: "",
      img: "",
    },
    validationSchema: Yup.object({
    //   holidayName: Yup.string().required("Holiday Name is required."),
    occasion: Yup.string().required("Occassion is required."),
      date: Yup.date().required("Please select a date"),
      // toDate: Yup.date().required("Please select a date"),
      day: Yup.string().required("Day is required."),
    //   image: Yup.string().required("Image is required."),
    }),
    onSubmit: (values) => {
      
console.log(values)
    dispatch(addHol(values))
    
      setOnBoardSuccess(true);
      setTimeout(() => {
        navigate("/Employee/Holidays");
      }, 1000);
    },
  });

  const errors = formik.errors;

  return (
    <Grid container justifyContent={"center"} width="100%" pt={3}>
      <Stack
        sx={{
          textAlign: "left",
          width:
            responsive.isDesktop || responsive.isLaptop || responsive.isTablet
              ? "70%"
              : "100%",
        }}
      >
        <Card elevation={1}>
          <CardContent>
            <form
            onSubmit={formik.handleSubmit}
            >
              <Typography color={"primary"} variant="h5" mb={2}>
                Add Holidays
              </Typography>

              <Grid container spacing={1}>
                {/* <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  height={responsive.isMobile ? "14vh" : "11vh"}
                >
                  <Stack width={"100%"}>
                    <Typography variant="body2"> HOLIDAY NAME</Typography>
                    <InputBase
                      placeholder="Holiday Name"
                      type="text"
                      name="holidayName"
                      sx={{
                        border:
                          clickedBtnID === "holidayName"
                            ? "2px solid blue"
                            : "2px solid rgba(204, 204, 204, 0.5)",
                        height: "40px",
                        borderRadius: 1,
                      }}
                      onClick={() => handleClick("holidayName")}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.holidayName}
                    />
                    {formik.touched.holidayName && errors.holidayName && (
                      <Typography variant="caption" color="error">
                        {errors.holidayName}
                      </Typography>
                    )}
                  </Stack>
                </Grid> */}
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  height={responsive.isMobile ? "15vh" : "11vh"}
                >
                  <Stack width={"100%"}>
                    <Typography variant="body2"> OCCASION </Typography>
                    <InputBase
                      placeholder="Occasion"
                      type="text"
                      name="occasion"
                      sx={{
                        border:
                          clickedBtnID === "occasion"
                            ? "2px solid blue"
                            : "2px solid rgba(204, 204, 204, 0.5)",
                        height: "40px",
                        borderRadius: 1,
                      }}
                      onClick={() => handleClick("occasion")}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.occasion}
                    />
                    {formik.touched.occasion && errors.occasion && (
                      <Typography variant="caption" color="error">
                        {errors.occasion}
                      </Typography>
                    )}
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  height={responsive.isMobile ? "13vh" : "11vh"}
                >
                  <Typography variant="body2">DATE</Typography>
                  <InputBase
                    onChange={formik.handleChange}
                    value={formik.values.date}
                    type="date"
                    name="date"
                    lable="Date"
                    onClick={() => {
                      handleClick("date");
                    }}
                    onBlur={formik.handleBlur}
                    sx={{
                      border:
                        clickedBtnID === "date"
                          ? "2px solid blue"
                          : "2px solid rgba(204, 204, 204, 0.5)",
                      borderRadius: "4px",
                      p: "4px",
                      width: "100%",
                    }}
                  />
                  {formik.touched.date && errors.date && (
                    <Typography variant="caption" color="error">
                      {errors.date}
                    </Typography>
                  )}
                </Grid>
              </Grid>
              <br />
              <Grid container spacing={1}>
                
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  height={responsive.isMobile ? "15vh" : "11vh"}
                >
                  <Stack width={"100%"}>
                    <Typography variant="body2">DAY</Typography>
                    <Select
                      size="small"
                      name="day"
                      onChange={formik.handleChange}
                      value={formik.values.day}
                      sx={{
                        "& fieldset": {
                          borderColor: "rgba(204, 204, 204, 0.5)",
                          borderWidth: "2px",
                        },
                        "&:hover": {
                          "&& fieldset": {
                            border: "2px solid rgba(204, 204, 204, 0.5)",
                          },
                        },
                        height: "40px",
                        borderRadius: 1,
                      }}
                      onClick={() => handleClick("day")}
                      onBlur={formik.handleBlur}
                    >
                      <MenuItem value="Monday">Monday</MenuItem>
                      <MenuItem value="Tuesday">Tuesday</MenuItem>
                      <MenuItem value="Wednesday">Wednesday</MenuItem>
                      <MenuItem value="Thursday">Thursday</MenuItem>
                      <MenuItem value="Friday">Friday</MenuItem>
                      <MenuItem value="Saturday">Saturday</MenuItem>
                      <MenuItem value="Sunday">Sunday</MenuItem>
                    </Select>
                    {formik.touched.day && errors.day && (
                      <Typography variant="caption" color="error">
                        {errors.day}
                      </Typography>
                    )}
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  height={responsive.isMobile ? "17vh" : "15vh"}
                >
                  <Typography variant="body2" mb={0.5}>IMAGE</Typography>
                  
                  <Button variant="outlined" sx={{textTransform:"none"}}><FileUploadIcon/>Upload Image</Button>

                  {formik.touched.img && errors.img && (
                    <Typography variant="caption" color="error">
                      {errors.img}
                    </Typography>
                  )}
                </Grid>
              </Grid>
              
              <Button
                type="submit"
                variant="contained"
                sx={{ textTransform: "none", mt: 2 }}
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
        {onBoardSuccess && (
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            sx={{ height: "50px", mt: "10px" }}
            severity="success"
          >
            Holiday Added successfully.
          </Alert>
        )}
      </Stack>
    </Grid>
  );
}
