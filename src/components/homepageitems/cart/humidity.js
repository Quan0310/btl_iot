import React from 'react';
import { makeStyles,withStyles,lighten } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Badge from '@material-ui/core/Badge';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import Data from '../data';
const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 400,
      margin:'0 2px'
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    cartFooter: {
      '& p':{
        width:'30%',
        float:'left',
        paddingLeft:'5px'
      }
  
    },
    cardHeader: {
      '& div span' :{
        fontSize:'24px',
        fontWeight:'500',
        marginBottom:'-35px'
      }
      }
  
  }));

export default function Humidity() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const data = Data();
    const humicolor = `hsl(220, 100%, ${50 + ((data.length > 0 ? data[data.length - 1].humidity : 0)-20)/3 }%)`;

    return (
      <Card className={classes.root}>
        <CardHeader
          className={classes.cardHeader}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Độ ẩm"
        />
        <CardContent  >
          <Typography gutterBottom variant="h6" component="p">
          <p className="taskCounter1" id="humicolor" style={{ color: humicolor }} >{data.length > 0 ? data[data.length - 1].humidity : 0}%</p>
          </Typography>
          <p style={{margin:'8px 0'}}>Integration</p>

          
          
        </CardContent>
      </Card>
    );
  }