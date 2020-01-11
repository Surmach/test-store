import React, {useContext, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {BasketContext} from '../storeContext'
import TableItem from "./TableItem";
import styled from 'styled-components'
import { spacing } from '@material-ui/system';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    button:{
        margin: 5,
    },
}));


const BusketModalForm = (props) =>{
    const {hOpen} =props;
    const [basket] = useContext(BasketContext);

    const classes = useStyles();

    const sumPrice = (basket) =>{
        const itemPrice = basket.map(item=> +item.price.split('$')[0])
        let totalSum = 0
        for (let i = 0; i < itemPrice.length; i++) {
        totalSum += itemPrice[i]
        }
        return totalSum
    }

    return(
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={hOpen}
                //onClose={}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={hOpen}>
                    <div className={classes.paper}>

                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Brand</TableCell>
                                        <TableCell>CPU</TableCell>
                                        <TableCell>RAM</TableCell>
                                        <TableCell>Disc</TableCell>
                                        <TableCell>Price</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {basket.map(item=>(<TableItem key={item.id} basket={item}/>))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Grid container>
                            <Grid item sx={6}>
                                <form>
                                    <TextField className={classes.button} id="standard-basic" label="Name" /> <br/>
                                    <TextField className={classes.button} id="standard-basic" label="Email" type='email' /> <br/>
                                    <TextField className={classes.button} id="standard-basic" label="Post office" /> <br/>
                                    <TextField className={classes.button} id="standard-basic" label="Phone nomber" type='nomber' /> <br/>
                                    <Button className={classes.button} type='submit' variant="contained" color="primary">
                                        Купить
                                    </Button>
                                </form>
                            </Grid>
                            <Grid item sx={6}>
                                <span>Total price: {`${sumPrice(basket)}$`}</span>   
                            </Grid>
                        </Grid>

                       
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default BusketModalForm;