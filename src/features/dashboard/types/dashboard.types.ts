export type DashboardTransaction = {

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

export type DashboardBeneficiary = {

    _id: string;

    alias: string;

    accountNumber: string;

};

export type DashboardResponse = {

    client: {

        _id: string;

        name: string;

        curp: string;

        email: string;

        phone: string;

        address: string;

    };

    account: {

        accountNumber: string;

        accountType: string;

        balance: number;

        currency: string;

        status: string;

    };

    beneficiaries:
    DashboardBeneficiary[];

    lastTransactions:
    DashboardTransaction[];

};