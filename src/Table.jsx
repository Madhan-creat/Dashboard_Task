import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SelectVariants from './selector';

function createData(
  name,
  text,
  stock,
  price,
  sales,
  
) {
  return { name,text, stock, price, sales };
}

const rows = [
  createData('https://picsum.photos/200','Abstract 3D','32 in stack', '$45.99',20),
  createData('https://picsum.photos/200','sarphens Illustraction','2 in stack', '$65.99',10),
  createData('https://picsum.photos/200','Abstract 3D','30 in stack', '$15.99',30),
  createData('https://picsum.photos/200','Abstract 3D','12 in stack', '$5.99',20),
  createData('https://picsum.photos/200','Abstract 3D','35 in stack', '$40.99',50),
  createData('https://picsum.photos/200','Abstract 3D','32 in stack', '$45.99',60),
  createData('https://picsum.photos/200','Abstract 3D','42 in stack', '$45.99',20),

];

export default function Tablebasic() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h2>Product sell</h2>Product Name</TableCell>
            <TableCell align="right"><br/>Stock</TableCell>
            <TableCell align="right"> <input type='text' className='search' placeholder='Search'/><br/>Price</TableCell>
            <TableCell align="right"><SelectVariants/>Total Sales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> <img src={row.name} width={80} height={40}/>{row.text}
               
              </TableCell>
              <TableCell align="right">{row.stock}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.sales}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
