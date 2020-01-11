import React, {useContext} from 'react'
import {BasketContext, StoreContext} from '../storeContext'
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
  const {store} = props;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [basket, setBasket] = useContext(BasketContext);

    const handleExpandClick = () => {
    setExpanded(!expanded);
    };

    const handleBuy = () =>{
        setBasket(prevBasket=>[...prevBasket, {
            id: store.id,
            phoneName: store.phoneName,
            brand: store.brand,
            CPU: store.CPU,
            RAM: store.RAM,
            disc: store.disc,
            price: store.price
        }]);
    };

    return (
        <Card className={classes.card}>
      <CardHeader
        title={store.phoneName}
        subheader={`${store.CPU} ${store.RAM} ${store.disc}`}
      />
      <CardMedia
        className={classes.media}
        image={store.img}
        title={store.phoneName}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {store.description}
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
            {store.fullDescription}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    )
};
export default ItemCard
