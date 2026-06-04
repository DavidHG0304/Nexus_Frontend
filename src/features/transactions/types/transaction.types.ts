export type Transaction = {
    type: string;
    amount: number;
    description: string;
    status: string;
    fromAccount?: string | null;
    toAccount?: string | null;
    date?: string;
};