import React from "react";
import { Grid } from "@mui/material";
import UseReponsive from "../hooks/UseResponsive";
import LeavePolicy from "./LeavePolicy";
import { LeaveBalanceMobile } from "./LeaveBalanceMobile";
import { LeaveBalanceDeskTop } from "./LeaveBalanceDeskTop";
import UpcomingHolidays from "./UpcomingHolidays";
import PendingReq from "./PendingReq";
import ApproverCard from "./ApproverCard";

export default function Dashboard({ role }) {
  const responsive = UseReponsive();

  return (
    <Grid container width="100%" px={1}>
      <Grid width="100%" height={"100%"}>
        
        <Grid xs={12} width="100%">
          {responsive.isMobile ? (
            <LeaveBalanceMobile />
          ) : (
            <LeaveBalanceDeskTop />
          )}
        </Grid>

        <Grid container sx={{ my: 1 }} columnSpacing={1}>
          {(role === "Admin" || role === "Manager") && (
            <Grid item xs={12} sm={9} md={9} lg={9}>
              <PendingReq />
            </Grid>
          )}

          <Grid
            item
            xs={12}
            sm={role === "Manager" || role === "Admin" ? 3 : 6}
            md={role === "Manager" || role === "Admin" ? 3 : 6}
            lg={role === "Manager" || role === "Admin" ? 3 : 6}
          >
            <UpcomingHolidays />
          </Grid>

          {/* Approver Card-"For Employee"  */}
          {role !== "Admin" && role !== "Manager" && (
            <Grid item xs={12} sm={6} md={6} lg={6} mt={responsive.isMobile && 1} textAlign="left">
              <ApproverCard />
              <Grid mt={1}>
                <LeavePolicy />
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
