import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { invoiceStatus } from '../../utils';
import { IInvoices } from '../../models';

type Status = "error" | "success" | "warning";

interface IProps {
    invoices: IInvoices[];
    currentPage: number;
    rowsPerPage: number;
}

const InvoiceTable: React.FC<IProps> = ({ invoices, currentPage, rowsPerPage }) => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Qaimə №</TableCell>
                        <TableCell>Müştəri</TableCell>
                        <TableCell>Məhsul sayı</TableCell>
                        <TableCell>Toplam məbləğ</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {invoices ? invoices.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((invoice) => (
                        <TableRow
                            key={invoice.id}
                        >
                            <TableCell component="th" scope="row">
                                {invoice.id}
                            </TableCell>
                            <TableCell>
                                <Stack direction="row" spacing={1}>
                                    <Avatar alt={invoice.user.fullName} src={invoice.user.img} />
                                    <Typography variant="body2" style={{ alignSelf: "center" }}>
                                        {invoice.user.fullName}
                                    </Typography>
                                </Stack>
                            </TableCell>
                            <TableCell>{invoice.countOfProduct}</TableCell>
                            <TableCell>{invoice.totalPrice}</TableCell>
                            <TableCell>
                                <Chip label={invoiceStatus[invoice.status].label} color={invoiceStatus[invoice.status].color as Status} />
                            </TableCell>
                        </TableRow>
                    )) : null}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default InvoiceTable;