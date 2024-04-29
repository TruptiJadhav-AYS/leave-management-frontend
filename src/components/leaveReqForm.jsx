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
import UseResponsive from "../hooks/UseResponsive";
import CheckIcon from "@mui/icons-material/Check";
import { useAddLeaveMutation } from "../Store/slice/apiLeaveSlice";
import { useDispatch } from "react-redux";
import addSendingRequest from "../Store/action/AddRequestHistory";

function LeaveReqForm() {
  let Navigate = useNavigate();
  let dispatch = useDispatch();
  let [clickedId, setClickedId] = useState("");
  let responsive = UseResponsive();
  let [submitSuccess, setSubmitSuccess] = useState(false);

  function handleClick(id) {
    setClickedId(id);
  }
  const [addLeave] = useAddLeaveMutation();

  const yup = require("yup");

  const leaveReqObj = yup.object({
    start_date: yup.date().required("Please select a date"),
    end_date: yup
      .date()
      .min(yup.ref("start_date"), "Please Select a valid date")
      .required("Please select a date"),
    leave_type: yup.string().required("Please Select a leave type"),
    reason: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      start_date: "",
      end_date: "",
      leave_type: "",
      reason: "",
    },
    validationSchema: leaveReqObj,
    onSubmit: (values) => {
      
      addLeave(values);
      console.log(values)
      setSubmitSuccess(true);
      setTimeout(() => {
        Navigate("/Employee");
      }, 1000);
    },
  });

  const Error = formik.errors;

  // Use the useAddLeaveMutation hook
  // const [addLeaveMutation] = useAddLeaveMutation();

  return (
    <Grid
      container
      justifyContent={"center"}
      width="100%"
      pt={responsive.isMobile ? 0 : 3}
    >
      <Stack
        sx={{ textAlign: "left", width: responsive.isMobile ? "100%" : "70%" }}
      >
        <Card elevation={1} pt="5%">
          <CardContent
            component={"form"}
            onSubmit={formik.handleSubmit}
          >
            <Typography mb={2} variant="h5" color={"primary"}>
              Apply Leave
            </Typography>

            <Grid
              container
              direction={"row"}
              columnSpacing={1.5}
              justifyContent={"space-between"}
              pt="5px"
            >
              <Grid item xs={12} sm={6} height={responsive.isMobile ? "15vh" : "15vh"}>
                <Typography fontSize={"13px"}>FROM DATE</Typography>
                <InputBase
                  onChange={formik.handleChange}
                  value={formik.values.start_date}
                  type="date"
                  name="start_date"
                  lable="From Date"
                  onClick={() => {
                    handleClick("start_date");
                  }}
                  onBlur={formik.handleBlur}
                  sx={{
                    border:
                      clickedId === "start_date"
                        ? "2px solid blue"
                        : "2px solid rgba(204, 204, 204, 0.5)",
                    borderRadius: "4px",
                    p: "4px",
                    width: "100%",
                  }}
                />
                {formik.touched.start_date && Error.start_date && (
                  <Typography fontSize={"12px"} color="error">
                    {Error.start_date}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={12} sm={6} height={responsive.isMobile ? "15vh" : "15vh"}>
                <Typography fontSize={"13px"}>TO DATE</Typography>
                <InputBase
                  value={formik.values.end_date}
                  onChange={formik.handleChange}
                  type="date"
                  name="end_date"
                  lable="To Date"
                  onClick={() => {
                    handleClick("end_date");
                  }}
                  onBlur={formik.handleBlur}
                  sx={{
                    border:
                      clickedId === "end_date"
                        ? "2px solid blue"
                        : "2px solid rgba(204, 204, 204, 0.5)",
                    borderRadius: "4px",
                    p: "4px",
                    width: "100%",
                  }}
                />

                {formik.touched.end_date && Error.end_date && (
                  <Typography variant="caption" color="error">
                    {Error.end_date}
                  </Typography>
                )}
              </Grid>
            </Grid>

            <Grid container pb={2}>
              <Grid item xs={12} sm={6} height={responsive.isMobile ? "11vh" : "11vh"}>
                <Stack width="100%">
                  <Typography fontSize={"13px"}>LEAVE TYPE</Typography>
                  <Select
                    value={formik.values.leave_type}
                    name="leave_type"
                    size="small"
                    labelId="leave-type-label"
                    onClick={() => {
                      handleClick("leave_type");
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
                    <MenuItem value="first half">Half Day (First half)</MenuItem>
                    <MenuItem value="second half">Half Day (Second half)</MenuItem>
                    <MenuItem value="full">Full Day</MenuItem>
                    <MenuItem value="work from home">Work From Home</MenuItem>
                  </Select>

                  {formik.touched.leave_type && Error.leave_type && (
                    <Typography variant="caption" color="error">
                      {Error.leave_type}
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
                  px: 1
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

            <Button type="submit" variant="contained" color="primary" sx={{ textTransform: "none", }} >
              Apply Leave
            </Button>

          </CardContent>
        </Card>
        {submitSuccess &&
          (
            <Alert icon={<CheckIcon fontSize="inherit" />} sx={{ height: "50px", mt: "10px" }} severity="success">
              You have applied for leave successfully.
            </Alert>
          )}
      </Stack>
    </Grid>
  );
}

export default LeaveReqForm;
