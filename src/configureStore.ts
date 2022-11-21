import { configureStore } from '@reduxjs/toolkit';
import invoiceReducer from './redux/reducer/invoice';

export const store = configureStore({
    reducer: {
        invoices: invoiceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>