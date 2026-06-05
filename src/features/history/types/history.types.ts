export type HistoryTransaction = {

    _id: string;

    fromAccount: string;

    toAccount: string;

    type: string;

    amount: number;

    description: string;

    branch: string;

    status: string;

    date: string;

};