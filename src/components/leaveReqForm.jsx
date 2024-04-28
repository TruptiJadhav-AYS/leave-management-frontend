import {
  InputBase,
  Typography,
  Stack,
  MenuItem,
  Button,
  Select,
  Card,
  CardContent,
  Grid,
  Alert
} from "@mui/material";
import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import UseReponsive from "../hooks/UseResponsive";
import CheckIcon from "@mui/icons-material/Check"
import { useDispatch } from "react-redux";
import addSendingRequest from "../Store/action/AddRequestHistory";
import { useAddLeaveMutation } from "../Store/slice/apiHistorySlice";


function LeaveReqForm() {
  let Navigate = useNavigate();
  let dispatch=useDispatch();
  let [clickedId, setClickedId] = useState("");
  let responsive=UseReponsive();
  let [submitSuccess,setSubmitSuccess]=useState(false)

  function handleClick(id) {
    setClickedId(id);
  }

  const yup = require("yup");

  // const today = new Date();

  const leaveReqObj = yup.object({
    fromDate: yup
      .date()
      .required("Please select a date"),
    toDate: yup
      .date()
      .min(yup.ref("fromDate"), "Please Select a valid date")
      .required("Please select a date"),
    leaveType: yup.string().required("Please Select a leave type"),
    reason: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      fromDate: "",
      toDate: "",
      leaveType: "",
      reason: "",
    },
    validationSchema: leaveReqObj,
    onSubmit: (values) => {
      dispatch(addSendingRequest(values))
      setSubmitSuccess(true);
      setTimeout(()=>{
      Navigate("/Employee");
      },1000)
    },
  });

  const Error = formik.errors;

  return (
    <Grid container justifyContent={"center"} width="100%" pt={responsive.isMobile ? 0 : 3}>
      <Stack sx={{textAlign: "left", width : (responsive.isDesktop || responsive.isLaptop || responsive.isTa) ? "70%" : "100%"}}>
      <Card
        elevation={1}
        pt="5%"
      >
        
        <CardContent component={"form"} onSubmit={formik.handleSubmit}>
        
          <Typography mb={2} variant="h5" color={"primary"}>
            Apply Leave
          </Typography>

          <Grid
            container
            direction={"row"}
            columnSpacing={1.5}
            // mb={1}
            justifyContent={"space-between"}
            pt="5px"
          >
            <Grid item xs={12} sm={6} height={responsive.isMobile ? "15vh" : "15vh"}>
              <Typography fontSize={"13px"}>FROM DATE</Typography>
              <InputBase
                onChange={formik.handleChange}
                value={formik.values.fromDate}
                type="date"
                name="fromDate"
                lable="From Date"
                onClick={() => {
                  handleClick("from-date");
                }}
                onBlur={formik.handleBlur}
                sx={{
                  border:
                    clickedId === "from-date"
                      ? "2px solid blue"
                      : "2px solid rgba(204, 204, 204, 0.5)",
                  borderRadius: "4px",
                  p: "4px",
                  width: "100%",
                }}
              />
              {formik.touched.fromDate && Error.fromDate && (
                <Typography fontSize={"12px"} color="error">
                  {Error.fromDate}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={6} height={responsive.isMobile ? "15vh" : "15vh"}> 
              <Typography fontSize={"13px"}>TO DATE</Typography>
              <InputBase
                value={formik.values.toDate}
                onChange={formik.handleChange}
                type="date"
                name="toDate"
                lable="To Date"
                onClick={() => {
                  handleClick("to-date");
                }}
                onBlur={formik.handleBlur}
                sx={{
                  border:
                    clickedId === "to-date"
                      ? "2px solid blue"
                      : "2px solid rgba(204, 204, 204, 0.5)",
                  borderRadius: "4px",
                  p: "4px",
                  width: "100%",
                }}
              />

              {formik.touched.toDate && Error.toDate && (
                <Typography variant="caption" color="error">
                  {Error.toDate}
                </Typography>
              )}
            </Grid>
          </Grid>

          <Grid container pb={2}>
            <Grid item xs={12} sm={6} height={responsive.isMobile ? "11vh" : "11vh"}>
              <Stack width="100%">
                <Typography fontSize={"13px"}>LEAVE TYPE</Typography>
                <Select
                  value={formik.values.leaveType}
                  name="leaveType"
                  size="small"
                  labelId="leave-type-label"
                  onClick={() => {
                    handleClick("leave-type");
                  }}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  sx={{
                    "& fieldset": {
                      borderColor: "rgba(204, 204, 204, 0.5)",
                      borderWidth: "2px",
                    },
                    "&:hover": {
                      "&& fieldset": {
                        border: "2px solid rgba(204, 204, 204, 0.5)"
                      }
                    },
                  }}
                >
                  <MenuItem value="Half day (First half)">Half Day (First half)</MenuItem>
                  <MenuItem  value="Half day (Second half)">Half Day (Second half)</MenuItem>
                  <MenuItem value="Full day">Full Day</MenuItem>
                  <MenuItem value="Work From Home">Work From Home</MenuItem>
                </Select>

                {formik.touched.leaveType && Error.leaveType && (
                  <Typography variant="caption" color="error">
                    {Error.leaveType}
                  </Typography>
                )}
              </Stack>
            </Grid>
          </Grid>

          <Stack width="100%">
            <Typography fontSize={"13px"}>REASON</Typography>
            <InputBase
              value={formik.values.reason}
              name="reason"
              sx={{
                border:
                  clickedId === "reason"
                    ? "2px solid blue"
                    : "2px solid  rgba(204, 204, 204, 0.5)",
                borderRadius: "4px",
                px:1
              }}
              multiline
              rows={3}
              placeholder="Reason for leave"
              onClick={() => {
                handleClick("reason");
              }}
              onChange={formik.handleChange}
            />
          </Stack>

          <br />

          <Button type="submit" variant="contained" color="primary" sx={{textTransform:"none",}} >
            Apply Leave
          </Button>
  
        </CardContent>
        
      </Card>
      {submitSuccess && 
          (
          <Alert  icon={<CheckIcon fontSize="inherit" />} sx={{height:"50px",mt:"10px"}}  severity="success">
            You have applied for leave successfully.
          </Alert>
          )}
          </Stack>
    </Grid>
  );
}

export default LeaveReqForm;
