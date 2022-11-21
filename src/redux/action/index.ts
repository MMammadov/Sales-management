import { Dispatch } from "redux";
import { invoiceService } from "../../services/invoiceService";
import { fetchInvoices } from "../reducer/invoice";


export const getInvoices = (dispatch: Dispatch) => {
    invoiceService.getInvoices().then((data) => {
        dispatch(fetchInvoices(data))
    })
};