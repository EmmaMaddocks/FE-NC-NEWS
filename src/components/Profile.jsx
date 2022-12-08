import * as api from "../utils/api";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';

import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { AirlineSeatIndividualSuiteSharp } from "@mui/icons-material";

const Profile = ({ loggedInUser }) => {
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);


  useEffect(() => {
    fetch(`https://fair-blue-ladybug-wear.cyclic.app/api/users/${loggedInUser}`)
      .then((res) => res.json())
      .then((response) => {
        setProfile(response[0]);
        console.log(profile)
      })
      .catch((error) => {

      });
  });



  return (

<>
<Box
      sx={{
        width: 300,
        height: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
          <Avatar alt="Remy Sharp"  />
<ListItemText
          primary=      ''
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
Hello {profile.name}!
              </Typography>
              
                     </>
          }
        />

</Box>
</>
)
};



export default Profile;
