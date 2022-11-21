import { createSlice } from '@reduxjs/toolkit';
import { IInvoices } from '../../models';
import { RootState } from '../../configureStore';

interface IInvoceState {
    invoices: IInvoices[];
}

const initialState: IInvoceState = { invoices: [] }

export const invoiceSlice = createSlice({
    name: "invoices",
    initialState,
    reducers: {
        fetchInvoices: (state, action) => {
            state.invoices = action.payload
        }
    }
});

export const { fetchInvoices } = invoiceSlice.actions;

export const selectInvoices = (state: RootState) => state.invoices

export default invoiceSlice.reducer;