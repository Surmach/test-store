import React from 'react'
import {connect} from 'react-redux'
import {addItem} from './../actions/indexAction'
import {getItems} from './../actions/indexAction'
import ItemCard from './itemCard'
import { Container, Grid } from '@material-ui/core'

const ItemCardList = (props) =>{
const {item} = props;

    return(
        <Container>
            <Grid container justify="center">                
                    {item.map(it=>(<ItemCard key={it.id} item={it}/>))}                  
            </Grid>
        </Container>
    )
};

const mapStateToProps = (store) =>{
    return{
      item: store.getItemReduser.item
    } 
  };
  
  const mapDispatchToProps = (dispatch) =>{
    return{
      addItem: dispatch(addItem()),
      getItems: dispatch(getItems())
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ItemCardList)