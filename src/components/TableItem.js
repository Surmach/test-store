import React from "react";
import {TableCell, TableRow} from "@material-ui/core";
const TableItem = (props) =>{
    const {basket} =props;
    return(
        <TableRow>
            <TableCell>{basket.phoneName}</TableCell>
            <TableCell>{basket.brand}</TableCell>
            <TableCell>{basket.CPU}</TableCell>
            <TableCell>{basket.RAM}</TableCell>
            <TableCell>{basket.disc}</TableCell>
            <TableCell>{basket.price}</TableCell>
        </TableRow>
    )
};

export default TableItem