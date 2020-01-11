import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import {addItem, getItems} from "../actions/indexAction";
import {connect} from "react-redux";
import {store} from "../store/store";

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
      margin: 10
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));

const ItemCard = (props) =>{
const {item, basket} = props;

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [counter, setCounter] = React.useState(0);
    const [storeBasket, setStoreBasket] = React.useState([]);

    const handleExpandClick = () => {
    setExpanded(!expanded);
    };

    const handleBuy = () =>{

        setCounter(counter + 1);
        store.dispatch(addItem({name: item.phoneName, counter: counter + 1}));
        storeBasket.push()
    };

    return (
        <Card className={classes.card}>
      <CardHeader
        title={item.phoneName}
        subheader={`${item.CPU} ${item.RAM} ${item.disc}`}
      />
      <CardMedia
        className={classes.media}
        image={item.img}
        title={item.phoneName}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
            <Button  variant="contained" color="primary" onClick={handleBuy}>
                BUY
            </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {item.fullDescription}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    )
};


const mapStateToProps = (store) =>{
    console.log(store);
    return{
        basket: store.getItemReduser.basket
    }
};

const mapDispatchToProps = (dispatch) =>{
    return{
        basket: dispatch(addItem()),
        getItems: dispatch(getItems())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard)
