import {
    Avatar,
    Card,
    CardContent,
    Grid,
    Typography,
 
  } from '@material-ui/core';
import CountUp from "react-countup"
  
 

const DashboardCard = ({title,count,icon,dbColor},...props) => (
  

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
                style = {{fontSize:'14px', color: "#6b778c"}}
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
                style = {{backgroundColor: dbColor}}   
            >
             {icon}
            </Avatar>
          </Grid>
        </Grid>
       
      </CardContent>
    </Card>
  );

  export default DashboardCard