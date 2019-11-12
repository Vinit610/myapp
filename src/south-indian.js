import React,{useContext} from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {Button} from "@material-ui/core";
import {BrowserRouter as Router , Link, Route} from 'react-router-dom'
import Mycart from "./mycart";
import {OrderContext} from './OrderContext'
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

function createData(name,  type, price) {
  return { name, type, price};
}

const rows = [
  createData("Mysore Msala", "South-Indian", 24),
  createData("Idli-Sambhar",  "South-Indian", 37),
  createData("Meduvada", "South-Indian", 24),
  createData("Plain Dosa", "South-Indian", 67),
  createData("Uttapam", "South-Indian", 49)
];

const useStyles = makeStyles(theme => ({
  root: {
    width: "30%",
    marginTop: theme.spacing(2),
    overflowX: "auto"
  },
  table: {
    maxWidth:500
  }
}));

function Southindian() {
  const classes = useStyles();
  const [order,setOrder] =  useContext(OrderContext);
  const selected = 0;
  function add(name,price){
    //  console.log("Hello")
      setOrder(prevOrder => [...prevOrder,{name:name,price:price}])
  };
  function setQuantity(quan){
    console.log(quan)
    selected = quan;
  }
  return (
    <Router>
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Food Items</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Selection</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
              >
                <MenuItem onClick = {() => console.log(1)} >1</MenuItem>
                <MenuItem onClick = {() => console.log(2)} >2</MenuItem>
                <MenuItem onClick = {() => console.log(3)} >3</MenuItem>
              </Select>
              <StyledTableCell align="right" >{row.type}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <Button onClick = {() => add(row.name,row.price)}>Add</Button>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Route path = "/mycart" component={Mycart}/>
    <Link to='/mycart'>Go to MyCart</Link>
    </Router>
  );
}

export default Southindian;