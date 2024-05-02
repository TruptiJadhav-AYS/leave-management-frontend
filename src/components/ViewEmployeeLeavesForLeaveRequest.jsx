// import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import {useGetRemainingBalanceQuery, useGetWorkFromHomeBalanceQuery } from "../Store/slice/apiLeaveBalanceSlice";



function SimpleDialog(props) {
  const { Emp ,onClose, selectedValue, open } = props;

  console.log("Emp",Emp);
  console.log("selectedValue",selectedValue);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  




  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Balance leave</DialogTitle>
      <Typography>{selectedValue&&selectedValue[0]?.remainingBalance}/{selectedValue&&selectedValue[0]?.default_balance}</Typography>
      <Typography>{selectedValue&&selectedValue[1]?.remainingBalance}/{selectedValue&&selectedValue[1]?.defaultBalance}</Typography>

    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function ViewEmployeeLeavesForLeaveRequest({Emp , open , setOpen}) {
  const [selectedValue, setSelectedValue] = useState();
  const {data:leave}=useGetRemainingBalanceQuery(Emp?.emp_id)
  const {data:wfh}=useGetWorkFromHomeBalanceQuery(Emp?.emp_id)

  useEffect(()=>{
    setSelectedValue([leave,wfh])
  },[leave,wfh])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <SimpleDialog
        Emp={Emp}
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
