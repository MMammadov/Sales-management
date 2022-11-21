import { IInvoices } from '../models';
import { httpClient } from './httpClient';

class InvoiceService {
    private baseUrl = 'http://localhost:3030';

    public getInvoices = (): Promise<IInvoices[]> => {
        return httpClient.get(this.baseUrl + '/invoices');
    };

    public deleteInvoice = (invoiceId: string): Promise<IInvoices> => {
        return httpClient.delete(this.baseUrl + '/invoices/' + invoiceId);
    }

    public addInvoice = (data: IInvoices): Promise<IInvoices> => {
        return httpClient.post(this.baseUrl + '/invoices', data);
    }

    public editInvoice = (data: IInvoices): Promise<IInvoices> => {
        return httpClient.put(this.baseUrl + '/invoices', data);
    }
};

export const invoiceService = new InvoiceService();