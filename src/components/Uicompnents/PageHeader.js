import React from 'react'
import {Paper,Card, Typography, makeStyles} from "@material-ui/core"

const useStyles = makeStyles( theme =>({
    paper:{
        backgroundColor:'#fdfdff'
    },
    pageHeader:{
        padding: theme.spacing(3),
        display:'flex',
        // margin: theme.spacing(1)

    },
    pageIcon:{
        padding: theme.spacing(2),
        display:'inline-block',
        color:theme.palette.primary.main
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    }
}))
function PageHeader({icon,title,subtitle}) {
    const classes = useStyles()
    return (
        <Paper elevation = {0} square className = {classes.paper} >
                    <div className = {classes.pageHeader}>
                        <Card  className = {classes.pageIcon}>
                            {icon}
                        </Card>
                
                    <div className = {classes.pageTitle} >
                        <Typography
                            variant = 'h6'
                            component = 'div'
                        >
                        {title}
                        </Typography>
                        <Typography
                            variant = 'subtitle2'
                            component = 'div'
                        >
                        {subtitle}
                        </Typography>
                    </div>
         </div>
        </Paper>
    )
}

export default PageHeader

