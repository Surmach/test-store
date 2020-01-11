import React, {useContext} from 'react'
import {StoreContext} from '../storeContext'
import {SearchContext} from '../storeContext'
import ItemCard from './itemCard'
import { Container, Grid } from '@material-ui/core'

const ItemCardList = () =>{
const [store] = useContext(StoreContext);
const [search] = useContext(SearchContext);
    return(
        <Container>
            <Grid container justify="center">                
                    {search[0] ? search.map(item=>(<ItemCard key={item.id} store={item}/>)) : 
                    store.map(item=>(<ItemCard key={item.id} store={item}/>))}
            </Grid>
        </Container>
    )
};

export default ItemCardList;