import { Button, CardContent, Grid, InputBase, Stack, Typography, Alert, Box } from "@mui/material";
import Card from "@mui/material/Card";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseResponsive from "../hooks/UseResponsive";
import CheckIcon from "@mui/icons-material/Check"

const validationSchema = Yup.object().shape({
  Type: Yup.string().required("Type is required"),
  Category: Yup.string().required("Category is required"),
  AssignDate: Yup.date().required("Assign Date is required"),
  SerialNo: Yup.string().required("Serial No is required"),
});

export default function InventoryForm() {
  const responsive = UseResponsive();
  const [onBoardSuccess, setOnBoardSuccess] = useState(false);
  const [clickedBtnID, setClickedBtnID] = useState("");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { Type: '', Category: '', AssignDate: '', SerialNo: '' },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setOnBoardSuccess(true);
      setTimeout(() => {
        navigate("/Employee/Employees/EditEmployee");
        setSubmitting(false);
      }, 1000);
    },
  });

  function handleCancel() {
    navigate("/Employee/Employees/EditEmployee");
  }

  function handleClick(id) {
    setClickedBtnID(id);
  }

  return (
    <Grid container justifyContent="center" width="100%" pt={3}>
      <Stack sx={{ textAlign: "left", width: responsive.isDesktop || responsive.isLaptop || responsive.isTablet ? "70%" : "100%" }}>
        <Card elevation={1}>
          <CardContent>
            <form onSubmit={formik.handleSubmit}>
              <Typography color="primary" variant="h5" mb={2}>
                Add Inventory
              </Typography>
              <Grid container spacing={1}>
                {/* Type Input */}
                <Grid item xs={12} sm={6} height={responsive.isMobile ? "14vh" : "11vh"}>
                  <Stack width="100%">
                    <Typography variant="body2">Type</Typography>
                    <InputBase
                      name="Type"
                      value={formik.values.Type}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Type"
                      type="text"
                      sx={{
                        border: clickedBtnID === "Type"
                        ? "2px solid blue"
                        : "2px solid  rgba(204, 204, 204, 0.5)",
                        height: "40px",
                        borderRadius: 1,
                      }}
                      onClick={() => handleClick('Type')}
                    />
                    {(formik.touched.Type && formik.errors.Type ) && (
                      <Typography variant="caption" color="error">
                        {formik.errors.Type}
                      </Typography>
                    )}
                  </Stack>
                </Grid>
                {/* Category Input */}
                <Grid item xs={12} sm={6} height={responsive.isMobile ? "14vh" : "11vh"}>
                  <Stack width="100%">
                    <Typography variant="body2">Category</Typography>
                    <InputBase
                      name="Category"
                      value={formik.values.Category}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Category"
                      type="text"
                      sx={{
                        border: clickedBtnID === "Category"
                        ? "2px solid blue"
                        : "2px solid  rgba(204, 204, 204, 0.5)",
                        height: "40px",
                        borderRadius: 1,
                      }}
                      onClick={() => handleClick('Category')}
                    />
                    {(formik.touched.Category && formik.errors.Category ) && (
                      <Typography variant="caption" color="error">
                        {formik.errors.Category}
                      </Typography>
                    )}
                  </Stack>
                </Grid>
              </Grid>
              <br />
              <Grid container spacing={1}>
                {/* Assign Date Input */}
                <Grid item xs={12} sm={6} height={responsive.isMobile ? "14vh" : "11vh"}>
                  <Stack width="100%">
                    <Typography variant="body2">Assign Date</Typography>
                    <InputBase
                      name="AssignDate"
                      value={formik.values.AssignDate}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      type="date"
                      sx={{
                        border:  clickedBtnID === "AssignDate"
                        ? "2px solid blue"
                        : "2px solid  rgba(204, 204, 204, 0.5)",
                        height: "40px",
                        borderRadius: 1,
                      }}
                      onClick={() => handleClick('AssignDate')}
                    />
                    {(formik.touched.AssignDate && formik.errors.AssignDate ) && (
                      <Typography variant="caption" color="error">
                        {formik.errors.AssignDate}
                      </Typography>
                    )}
                  </Stack>
                </Grid>
                {/* Serial No Input */}
                <Grid item xs={12} sm={6} height={responsive.isMobile ? "14vh" : "11vh"}>
                  <Stack width="100%">
                    <Typography variant="body2">Serial No</Typography>
                    <InputBase
                      name="SerialNo"
                      value={formik.values.SerialNo}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Serial No"
                      type="text"
                      sx={{
                        border: clickedBtnID === "SerialNo"
                        ? "2px solid blue"
                        : "2px solid  rgba(204, 204, 204, 0.5)",
                        height: "40px",
                        borderRadius: 1,
                      }}
                      onClick={() => handleClick('SerialNo')}
                    />
                    {(formik.touched.SerialNo && formik.errors.SerialNo) && (
                      <Typography variant="caption" color="error">
                        {formik.errors.SerialNo}
                      </Typography>
                    )}
                  </Stack>
                </Grid>
              </Grid>
              <br />
              <Box>
                <Button type="submit" variant="contained" sx={{ textTransform: "none", mt: 3 }} disabled={formik.isSubmitting}>
                  Submit
                </Button>
                <Button type="button" variant="contained" sx={{ textTransform: "none", mt: 3, ml: 1 }} onClick={handleCancel}>
                  Cancel
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
        {onBoardSuccess && (
          <Alert icon={<CheckIcon fontSize="inherit" />} sx={{ height: "50px", mt: "10px" }} severity="success">
            Inventory added successfully.
          </Alert>
        )}
      </Stack>
    </Grid>
  );
}
