import {
    Avatar,
    Card,
    CardContent,
    Grid,
    Typography,
 
  } from '@material-ui/core';
import CountUp from "react-countup"
import blue from "@material-ui/core/colors/blue";
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
  
 

const DashboardCard = ({title,count},...props) => (
  

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
                style = {{backgroundColor: blue.A200}}   
            >
            <LocalMoviesIcon/>
            </Avatar>
          </Grid>
        </Grid>
       
      </CardContent>
    </Card>
  );

  export default DashboardCard