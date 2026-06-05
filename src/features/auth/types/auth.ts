export type Client = {

    id: string;

    name: string;

    email: string;

};

export type LoginResponse = {

    token: string;

    client: Client;

};

export type RegisterResponse = {

    token: string;

    client: Client;

    account: {

        accountNumber: string;

        balance: number;

    };

};