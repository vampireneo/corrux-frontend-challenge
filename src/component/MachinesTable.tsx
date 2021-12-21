import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import cx from 'classnames';
import { isOutOfBounds, roundToDigit } from '../utils';

const TableWrapper = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 10;

  tr.isOutOfBounds {
    td,
    th {
      color: red;
    }
  }
`;

type TableProps = {
  machines: Machine[];
};

const MachinesTable = ({ machines }: TableProps) => (
  <TableWrapper>
    <TableContainer component={Paper} sx={{ maxHeight: 320 }}>
      <Table size="small" stickyHeader aria-label="machines table">
        <TableHead>
          <TableRow>
            <TableCell>Machine Id</TableCell>
            <TableCell>Serial Number</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Latitude</TableCell>
            <TableCell>Longitude</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {machines.map((machine) => (
            <TableRow
              key={machine.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className={cx({
                isOutOfBounds: isOutOfBounds(machine.location),
              })}
            >
              <TableCell component="th" scope="row">
                {machine.id}
              </TableCell>
              <TableCell>{machine.serial_number}</TableCell>
              <TableCell>{machine.model.make}</TableCell>
              <TableCell>{machine.model.model}</TableCell>
              <TableCell>
                {roundToDigit(machine.location.latitude, 5)}
              </TableCell>
              <TableCell>
                {roundToDigit(machine.location.longitude, 5)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </TableWrapper>
);

export default MachinesTable;
