import {
    Avatar,
    Card,
    CardContent,
    Grid,
    Typography,
 
  } from '@material-ui/core';
import CountUp from "react-countup"
import purple from '@material-ui/core/colors/purple';
import PeopleIcon from '@material-ui/icons/People';
  
 

const CustomerCard = ({title,count},...props) => (
  

    <Card
      sx={{ height: '100%' }}
      {...props}
    >
      <CardContent>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
                color="textSecondary"
                style = {{fontSize:'14px'}}
                gutterBottom
                variant="h6"
            >
             {title}
            </Typography>
            <Typography
            style = {{fontSize:'24px'}}
              color="textPrimary"
              variant="h3"
            >
             <CountUp end = {count} duration = {3} />
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
                style = {{backgroundColor: purple.A700}}   
            >
            <PeopleIcon/>
            </Avatar>
          </Grid>
        </Grid>
       
      </CardContent>
    </Card>
  );

  export default CustomerCard
