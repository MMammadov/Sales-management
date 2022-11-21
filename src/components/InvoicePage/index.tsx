import { Box, Button, FormControl, OutlinedInput, Pagination, Stack } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInvoices } from '../../redux/action';
import { selectInvoices } from '../../redux/reducer/invoice';
import SendIcon from '@mui/icons-material/Send';
import Table from './Table';

function InvoicePage() {
    const dispatch = useDispatch();
    const { invoices } = useSelector(selectInvoices);
    const [currentPage, setCurrentPage] = useState(1);
    const [goToPage, setGoToPage] = useState("");
    const rowsPerPage = 6;

    React.useEffect(() => {
        getInvoices(dispatch)
    }, [dispatch])

    const paginationCount = Math.ceil(invoices.length / rowsPerPage);

    const handleClick = () => {
        setCurrentPage(Number(goToPage))
        setGoToPage("")
    };

    const handleChange = ({ target: { value } }: any) => {
        if (Number(value) === currentPage || value > paginationCount) return
        setGoToPage(value)
    };

    return (
        <>
            <Table invoices={invoices} currentPage={currentPage} rowsPerPage={rowsPerPage} />
            <Box mt={7}>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                    <Box />
                    <Pagination count={paginationCount} page={currentPage} onChange={(e, page) => setCurrentPage(page)} />
                    <Box component="form" autoComplete="off">
                        <FormControl sx={{ width: '100px' }}>
                            <OutlinedInput onChange={handleChange} value={goToPage} />
                            <Button variant="text" endIcon={<SendIcon />} onClick={handleClick}>
                                Get
                            </Button>
                        </FormControl>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}

export default InvoicePage;