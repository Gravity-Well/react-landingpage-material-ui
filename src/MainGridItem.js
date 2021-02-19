import Grid       from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  
  mainContainer: {
    height: 400,
    backgroundImage: "url(https://cdn.pixabay.com/photo/2020/12/18/16/56/laptop-5842509_1280.jpg)",
    color: theme.palette.common.white 
  },
  mainItem: {
    padding: theme.spacing(6),
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
  
}));

export default function MainGridItem() {
  
  const classes = useStyles();
  
  return (
    <Grid container className={classes.mainContainer}>
    
      <Grid item className={classes.mainItem} md={6}>
    
        <Typography component='h2' variant='h2'>
          Hello Coding
        </Typography>

        <Typography variant='body1' paragraph>
          Learn coding in today's current front-end technologies from JavaScript to React. In addition, back-end technologies using nodejs and express.
        </Typography>
    
      </Grid>
    
    </Grid>
  );
}