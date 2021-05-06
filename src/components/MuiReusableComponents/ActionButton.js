import { makeStyles } from "@material-ui/core"
import Button from "@material-ui/core/Button"
const useStyles = makeStyles( theme =>({
  root:{
      minWidth: '0',
      margin:theme.spacing(0.5)
  },
  secondary:{
      backgroundColor: theme.palette.secondary.light,
      '& .MuiButton-label':{
          color: theme.palette.common.white
      }
  },
  primary:{
    backgroundColor: theme.palette.primary.light,
    '& .MuiButton-label':{
        color: theme.palette.common.white
    }
}
}))
function ActionButton({children,color,type,variant,onClick, disabled}) {
    const classes = useStyles()
    return (
        <Button
            disabled = {disabled}
            variant = {variant}
        className = { `${classes.root} ${classes[color]}`}
        onClick = {onClick}
            type = {type}
            >
            {children}
        </Button>
    )
}

export default ActionButton
