import React, {useContext} from 'react'
import {BasketContext} from '../storeContext'
import {StoreContext} from '../storeContext'
import {SearchContext} from '../storeContext'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import BusketModalForm from "./BusketModalForm";

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  }));

const NavBar = () =>{

    const classes = useStyles();
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
    const [basket] = useContext(BasketContext);
    const [store] = useContext(StoreContext)
    const [search, setSearch] = useContext(SearchContext)
  
    const toggleDrawer = (side, open) => event => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setState({ ...state, [side]: open });
    };
  
    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
        <List>
            <ListItem button>
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Xiaomi" />
            </ListItem>
        </List>
        <List>
            <ListItem button>
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Apple"  />
            </ListItem>
        </List>
      </div>
    );
    //const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [searchValue, setChangeValue] = React.useState()
    const handleOpen = () =>{
        setOpen(true);
    };

    const handleChange = (event) =>{
      setChangeValue(event.target.value)
      var findByName = store.filter(el => {
        return el["phoneName"] === searchValue;
    })
      setSearch(findByName)
    };


    return(
        <div className={classes.root}>
            <BusketModalForm hOpen={open}/>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={toggleDrawer('left', true)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
          <Typography className={classes.title} variant="h6" noWrap>
            Test-store
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
            onChange={handleChange}
            value={searchValue}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />

          </div>
            <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={basket.length} color="secondary" onClick={handleOpen}>
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
    )
};

export default NavBar;