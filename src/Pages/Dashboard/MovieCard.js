import {
    Avatar,
    Card,
    CardContent,
    Grid,
    Typography,
 
  } from '@material-ui/core';
import CountUp from "react-countup"
import pink from "@material-ui/core/colors/pink";
import MovieIcon from '@material-ui/icons/Movie';
  
 

const MovieCard = ({title,count},...props) => (
  

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
                style = {{backgroundColor: pink.A200}}   
            >
             <MovieIcon/>
            </Avatar>
          </Grid>
        </Grid>
       
      </CardContent>
    </Card>
  );

  export default MovieCard