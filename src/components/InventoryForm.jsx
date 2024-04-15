import {
  Button,
  CardContent,
  Grid,
  InputBase,
  Stack,
  Typography,
  Alert,
  Select,
  MenuItem,
} from "@mui/material";
import Card from "@mui/material/Card";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseResponsive from "../hooks/UseResponsive";
import CheckIcon from "@mui/icons-material/Check";
import { useDispatch, useSelector } from "react-redux";
import addInventorynew from "../Store/action/AddInventoryAction";
import AddIcon from '@mui/icons-material/Add';

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  category: Yup.string().required("Category is required"),
  // AssignDate: Yup.date().required("Assign Date is required"),
  serialNo: Yup.string().required("Serial No is required"),
});

export default function InventoryForm() {
  const responsive = UseResponsive();
  const dispatch = useDispatch();
  const [onBoardSuccess, setOnBoardSuccess] = useState(false);
  const [clickedBtnID, setClickedBtnID] = useState("");
  const navigate = useNavigate();
  const CategoryList = useSelector((state) => state.Category.CategoryList);
  console.log(CategoryList);
  const formik = useFormik({
    initialValues: { name: "", category: "", serialNo: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(addInventorynew(values));
      console.log(values);
      setOnBoardSuccess(true);
      setTimeout(() => {
        navigate("/Employee/InventoryList");
        // setSubmitting(false);
      }, 1000);
    },
  });

  function handleCancel() {
    navigate("/Employee/InventoryList");
  }

  function handleClick(id) {
    setClickedBtnID(id);
  }

  return (
    <Grid
      container
      justifyContent="center"
      width="100%"
      height="100%"
      pt={responsive.isMobile ? 0 : 3}
    >
      <Stack
        sx={{
          textAlign: "left",
          width:
            responsive.isDesktop || responsive.isLaptop || responsive.isTablet
              ? "70%"
              : "100%",
        }}
      >
        <Card elevation={1} sx={{ minHeight: responsive.isMobile && "100%" }}>
          <CardContent>
            <form onSubmit={formik.handleSubmit}>
              <Typography color="primary" variant="h5" mb={2}>
                Add Inventory
              </Typography>
              <Grid container spacing={1}>
                {/* Type Input */}
                <Grid
                  item
                  xs={12}
                  sm={6}
                  height={responsive.isMobile ? "14vh" : "11vh"}
                >
                  <Stack width="100%">
                    <Typography variant="body2">NAME</Typography>
                    <InputBase
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Name"
                      type="text"
                      sx={{
                        border:
                          clickedBtnID === "name"
                            ? "2px solid blue"
                            : "2px solid  rgba(204, 204, 204, 0.5)",
                        height: "40px",
                        borderRadius: 1,
                        px: 1,
                      }}
                      onClick={() => handleClick("name")}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <Typography variant="caption" color="error">
                        {formik.errors.name}
                      </Typography>
                    )}
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  height={responsive.isMobile ? "14vh" : "11vh"}
                >
                  <Stack width="100%">
                    <Typography variant="body2">SERIAL NO</Typography>
                    <InputBase
                      name="serialNo"
                      value={formik.values.serialNo}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Serial No"
                      type="text"
                      sx={{
                        border:
                          clickedBtnID === "SerialNo"
                            ? "2px solid blue"
                            : "2px solid  rgba(204, 204, 204, 0.5)",
                        height: "40px",
                        borderRadius: 1,
                        px: 1,
                      }}
                      onClick={() => handleClick("serialNo")}
                    />
                    {formik.touched.serialNo && formik.errors.serialNo && (
                      <Typography variant="caption" color="error">
                        {formik.errors.serialNo}
                      </Typography>
                    )}
                  </Stack>
                </Grid>
                {/* Category Input */}
                
              </Grid>
              <br />
              <Grid container spacing={1}>
              <Grid
                  item
                  xs={10}
                  sm={5}
                  height={responsive.isMobile ? "14vh" : "11vh"}
                >
                  <Stack width="100%">
                    <Typography variant="body2">CATEGORY</Typography>
                    
                    <Select
                      value={formik.values.category}
                      name="category"
                      size="small"
                      labelId="category"
                      onClick={() => {
                        handleClick("category");
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
                            border: "2px solid rgba(204, 204, 204, 0.5)",
                          },
                        },
                      }}
                    >
                      
                      {CategoryList.map((category) => (
                        <MenuItem key={category.id} value={category.name}>
                          {category.name}

                        </MenuItem>
                      ))}
                      
                      
                    </Select>
                    
                    
                    {formik.touched.category && formik.errors.category && (
                      <Typography variant="caption" color="error">
                        {formik.errors.category}
                      </Typography>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={2} sm={1} sx={{mt:3.5}} >
                  <AddIcon/>
                </Grid>
              </Grid>
              <br />
              <Grid container mt={2}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ textTransform: "none", mr: 2 }}
                  disabled={formik.isSubmitting}
                >
                  Submit
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  sx={{ textTransform: "none" }}
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </Grid>
            </form>
          </CardContent>
        </Card>
        {onBoardSuccess && (
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            sx={{ height: "50px", mt: "10px" }}
            severity="success"
          >
            Inventory added successfully.
          </Alert>
        )}
      </Stack>
    </Grid>
  );
}
