export interface IInvoices {
    id: string;
    user: IUser;
    countOfProduct: number;
    totalPrice: number;
    currency: string;
    status: "completed" | "terminated" | "inprogress";
}

export interface IUser {
    id: number;
    fullName: string;
    img: string;
}
