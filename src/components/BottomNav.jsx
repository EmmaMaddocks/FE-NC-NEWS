import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddArticle from './AddArticle';


export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="All" icon={<RestoreIcon />} component={Link} to="/articles"/>
          <BottomNavigationAction label="Topics" icon={<FavoriteIcon />} component={Link} to="/topics"/>
          <BottomNavigationAction label="Post" icon={<ArchiveIcon />} onClick={handleClickOpen}/>
          <BottomNavigationAction label="Football" icon={<ArchiveIcon />}component={Link} to="/topics/football" />

        </BottomNavigation>
      </Paper>
    </Box>

<Dialog open={open} onClose={handleClose}>
  <DialogTitle>Whats on your mind?</DialogTitle>
  <DialogContent>
    <DialogContentText>
Post something interesting!
    </DialogContentText>




<AddArticle/>

  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Close</Button>
  </DialogActions>
</Dialog>

</>
  );
}
