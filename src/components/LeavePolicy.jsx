import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Box,Divider} from '@mui/material'
import {Typography} from '@mui/material';
import {Card,CardContent} from "@mui/material";

export default function LeavePolicy() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (paper) => () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
        <Card>
            <CardContent>
            <Typography fontWeight={"bold"}>
                FAQ ?
            </Typography>
            </CardContent>
            <Divider/>

            <Box p={1.6}>
            <Typography  bgcolor={"#f5f5f5"} p={"1.5%"} mb={1} borderRadius={"5px"} onClick={handleClickOpen('paper')}>What about leave policy ?</Typography>
            <Typography  bgcolor={"#f5f5f5"} p={"1.5%"} borderRadius={"5px"}>About</Typography>
            </Box>

        </Card> 
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="scroll-dialog-title">Leave Policy</DialogTitle>
        <DialogContent >
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            sx={{ whiteSpace: 'pre-wrap' }}
          >
            `1. Annual Leave:

                Full-time employees: [X] days of paid annual leave per calendar year.
                Part-time employees: Entitlement prorated based on contracted hours.
                Request and approval: Through company's leave management system.
                Carryover: Unused annual leave up to [Y] days allowed; excess forfeited.
                2. Sick Leave:
                
                Full-time employees: [Z] days of paid sick leave per calendar year.
                Usage: For personal illness, injury, medical appointments, or caring for ill family members.
                Part-time employees: Entitlement prorated based on contracted hours.
                Notification: Employees must inform supervisor or HR department promptly.
                Certification: Doctor's certificate may be required for sick leave exceeding [X] consecutive days.
                3. Bereavement Leave:
                
                Entitlement: [X] days of paid bereavement leave for the death of an immediate family member.
                Additional leave: Unpaid leave may be granted for other relatives or close relationships, at management's discretion.
                4. Public Holidays:
                
                Recognition: [List of public holidays] are considered paid holidays.
                Compensation: Employees working on public holidays entitled to compensatory time off or holiday pay as per company policy.
                5. Maternity/Paternity Leave:
                
                Compliance: Policies adhere to local laws and regulations.
                Details: Maternity/paternity leave entitlements, duration, pay, and eligibility align with local laws and company policy.
                6. Unpaid Leave:
                
                Request: Employees may seek unpaid leave for personal reasons.
                Approval: Subject to supervisor and HR department approval.
                Granting: At management's discretion, considering business needs and employee performance.
                
                `
              
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}