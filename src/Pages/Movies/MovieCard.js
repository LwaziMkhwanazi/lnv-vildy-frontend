import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Avatar, IconButton, Typography,makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteMovie} from "../../redux/movies/movieAyncActions";
import EditIcon from '@material-ui/icons/Edit';
import {useDispatch} from "react-redux"
const useStyles = makeStyles( theme =>({
    blueColor:{
        color:theme.palette.common.white,
        backgroundColor:theme.palette.primary.main
    }
}))

function MovieCard({genreName,title,dailyRentalRate,id, numberInStock }) {
  const classes = useStyles()
    const dispatch = useDispatch()
    return (
        <div>
          <Card>
              <CardHeader
                        avatar = {
                            <Avatar className = {classes.blueColor} >
                              {title.substring(0,1)}
                            </Avatar>
                        }
                    action = {
                        <IconButton onClick = {()=>dispatch(deleteMovie(id))} >
                            <DeleteIcon/>
                        </IconButton>
                    }

                   title = {title}
                   subheader = {genreName} 
              />
              <CardContent>
                  <Typography gutterBottom color = "textSecondary">
                        Daily Rental Rate  <strong> SZL</strong> : {dailyRentalRate}
                  </Typography>
                  <Typography gutterBottom color = "textSecondary">
                        Number In Stock   : {numberInStock}
                  </Typography>
              </CardContent>
              <CardActions>
                  <IconButton>
                        <EditIcon/>
                  </IconButton>
              </CardActions>
          </Card>
        </div>
    )
}

export default MovieCard
