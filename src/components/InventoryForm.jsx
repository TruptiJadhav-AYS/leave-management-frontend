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
  IconButton,
  Box,
} from "@mui/material";
import Card from "@mui/material/Card";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseResponsive from "../hooks/UseResponsive";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import addInventorynew from "../Store/action/AddInventoryAction";
import addCategoryNew from "../Store/action/AddCategory";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  category: Yup.string().required("Category is required"),
  serialNo: Yup.string().required("Serial No is required"),
});

export default function InventoryForm() {
  const responsive = UseResponsive();
  const [onBoardSuccess, setOnBoardSuccess] = useState(false);
  const [onCategorySuccess, setOnCategorySuccess] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const CategoryList = useSelector((state) => state.Category.CategoryList);
  const [showAddCategoryField, setShowAddCategoryField] = useState(false);

  const formik = useFormik({
    initialValues: { name: "", category: "", serialNo: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      dispatch(addInventorynew(values));
      setOnBoardSuccess(true);
      setTimeout(() => {
        navigate("/Employee/InventoryList");
      }, 1000);
    },
  });

  function handleChangeCatgory(e) {
    setNewCategory(e.target.value);
  }
  function handleCancel() {
    navigate("/Employee/InventoryList");
  }
  function addNewCategory() {
    if (newCategory) {
      dispatch(addCategoryNew(newCategory));
      setShowAddCategoryField(false);
      setOnCategorySuccess(true);
    }
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
                {/* Name Input */}
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
                          formik.touched.name && formik.errors.name
                            ? "2px solid red"
                            : "2px solid rgba(204, 204, 204, 0.5)",
                        height: "40px",
                        borderRadius: 1,
                        px: 1,
                      }}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <Typography variant="caption" color="error">
                        {formik.errors.name}
                      </Typography>
                    )}
                  </Stack>
                </Grid>
                {/* Serial No Input */}
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
                          formik.touched.serialNo && formik.errors.serialNo
                            ? "2px solid red"
                            : "2px solid rgba(204, 204, 204, 0.5)",
                        height: "40px",
                        borderRadius: 1,
                        px: 1,
                      }}
                    />
                    {formik.touched.serialNo && formik.errors.serialNo && (
                      <Typography variant="caption" color="error">
                        {formik.errors.serialNo}
                      </Typography>
                    )}
                  </Stack>
                </Grid>
              </Grid>
              <br />
              <Grid container spacing={1}>
                {/* Category Input */}
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
                        setShowAddCategoryField(false);
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
                <Grid item xs={2} sm={1} sx={{ mt: 2.5 }}>
                  {!showAddCategoryField && (
                    <IconButton
                      disableRipple
                      size="small"
                      onClick={() => setShowAddCategoryField(true)}
                    >
                      <AddIcon />
                    </IconButton>
                  )}
                </Grid>
                {showAddCategoryField && (
                  <>
                    <Grid
                      item
                      xs={10}
                      sm={5}
                      height={responsive.isMobile ? "14vh" : "11vh"}
                    >
                      <Stack width="100%">
                        <Typography variant="body2">ADD CATEGORY</Typography>
                        {/* <Box display={"flex"} width={"700px"}> */}
                        <InputBase
                          name="newCategory"
                          // value={newCategory}
                          onChange={handleChangeCatgory}
                          // onBlur={formik.handleBlur}
                          placeholder="Add New Category"
                          type="text"
                          sx={{
                            border: "2px solid rgba(204, 204, 204, 0.5)",
                            height: "40px",
                            borderRadius: 1,
                            px: 1,
                          }}
                        ></InputBase>

                        {/* </Box> */}
                      </Stack>
                    </Grid>
                    <Grid item xs={2} sm={1} mt={2.3} >
                      <IconButton onClick={addNewCategory} >
                        <CheckIcon sx={{color:"black", border:"2px solid rgba(204, 204, 204, 0.5)", borderRadius:5, bgcolor:"lightblue"}} />
                      </IconButton>
                    </Grid>
                  </>
                )}
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
        {onCategorySuccess && (
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            sx={{ height: "50px", mt: "10px" }}
            severity="success"
          >
            Category added successfully.
          </Alert>
        )}

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
