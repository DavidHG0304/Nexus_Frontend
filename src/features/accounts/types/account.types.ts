import type { Transaction }
from "../../transactions/types/transaction.types";

export type Account = {
    accountNumber: string;
    accountType: string;
    balance: number;
    currency: string;
    clientId: {
        name: string;
        email?: string;
    };
};

export type ApiResponse = {
    account: Account;
    transactions: Transaction[];
};