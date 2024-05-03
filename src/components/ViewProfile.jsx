import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  CircularProgress,
} from "@mui/material";
import { useSelector } from "react-redux";
import {
  useGetEmployeesByIdQuery,
  useUploadImageMutation,
} from "../Store/slice/apiEmployeeSlice";

export default function ViewProfile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const id = useSelector((state) => state.employees.userId);
  const { data: Emp, isLoading, isError } = useGetEmployeesByIdQuery(id);
  const logedInEmp = Emp || [];
  const [uploadImage] = useUploadImageMutation();
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setSelectedFile(file);
      // try {
      //   await
      uploadImage({ employeeId: id, imageData: file });
      // } catch (error) {
      //   console.error("Error uploading profile picture: ", error);
      // }
    }
  };
  if (isLoading) {
    return <CircularProgress />;
  }
  if (isError) {
    return <></>;
  }

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        top: "10%",
      }}
    >
      <Card elevation={2}>
        <CardContent>
          <Grid
            container
            justifyContent={"space-around"}
            columnGap={12}
            height={"90%"}
          >
            <Avatar
              sx={{ width: 124, height: 124 }}
              src={
                logedInEmp.image === null
                  ? ""
                  : URL.createObjectURL(
                      new Blob([new Uint8Array(logedInEmp.image.data)])
                    )
              }
              alt="Profile"
            />
            <Grid item xs={12} mt={2}>
              <Button variant="outlined" onClick={triggerFileInput}>
                Change Photo
              </Button>
              <input
                ref={fileInputRef}
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </Grid>

            {/* Display other employee details */}
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="body1" mt={4} fontWeight={"700"}>
                Name : {logedInEmp.name}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography
                variant="caption"
                fontWeight={"600"}
                align="left"
                // justifyContent={"left"}
              >
                Email : {logedInEmp.email}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"}>
                Phone No : {logedInEmp.mobile_number}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"} align="left">
                Date Of Birth : {logedInEmp.dob}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"} align="left">
                Gender : {logedInEmp.gender}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"}>
                Department :{" "}
                {logedInEmp.department
                  ? logedInEmp.department.department_name
                  : "-"}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"}>
                Manager Name :{" "}
                {logedInEmp.manager === null ? "-" : logedInEmp.manager.name}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"}>
                Role : {logedInEmp.role}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"}>
                Projects: {logedInEmp.project && logedInEmp.project.map((pr, index) => (
                  <Typography key={index} variant="caption" fontWeight={"600"}>
                    {pr.name}
                    {index !== logedInEmp.project.length - 1 && ", "}
                  </Typography>
                ))}
                </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Typography variant="caption" fontWeight={"600"}>
                Inventory :{logedInEmp.inventories && logedInEmp.inventories.map((inv, index) => (
                  <Typography key={index} variant="caption" fontWeight={"600"}>
                    {inv.name}
                    {index !== logedInEmp.inventories.length - 1 && ", "}
                  </Typography>
                ))}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}