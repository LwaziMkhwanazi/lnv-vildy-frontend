import { Grid, Typography,Paper,makeStyles,Avatar, Button} from '@material-ui/core'

import React from 'react'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: theme.spacing(2),
     
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 700,
     
    },
    avatar: {
      width: theme.spacing(8),
      height: theme.spacing(8),
      backgroundColor: theme.palette.primary.light
    },
    button:{
        width:'50%'
    },
    admin:{
        marginTop:theme.spacing(3.5)
    }
  
  }));

function UserComponent({name,email,admin,deleteUser}) {

 
    const classes = useStyles()
    return (
        <div className={classes.root}>
      <Paper className={classes.paper}>

        <Grid container spacing={2}>
          <Grid item  >
                <Avatar  className = {classes.avatar}> {name.substring(0,1)}</Avatar>
          </Grid>

          <Grid item  xs container alignItems = "center">
            <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                           {name}
                        </Typography>
                        <Typography variant="body2" gutterBottom color = "textSecondary">
                                {email}
                        </Typography>
                    </Grid>
            </Grid>
          </Grid>
           
            <Grid item>
            <Grid item container  alignItems = "center">
                    <Typography variant="body2" className = {classes.admin}  >

                            IsAdmin : <span style = {{color:'blue',fontStyle:"oblique"}}> {admin}</span>
                    </Typography>
            </Grid>
            </Grid>
          <Grid item xs container direction="column" justify = "center">
            <Grid item >
                <Button onClick = {deleteUser} className = {classes.button} variant = "contained" color = "secondary">Delete</Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
    )
}

export default UserComponent
