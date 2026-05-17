export type Transaction = {
    type: string;
    amount: number;
    description: string;
    status: string;
    fromAccount?: string | null;
    toAccount?: string | null;
    date?: string;
};

export type ApiResponse = {
    account: {
        accountNumber: string;
        accountType: string;
        balance: number;
        currency: string;
        clientId: {
            name: string;
            email?: string;
        };
    };
    transactions: Transaction[];
};