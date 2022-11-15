import { Wallet } from '@ethersproject/wallet';

export function getWallet(privateKey) {
    let wallet = new Wallet(privateKey);
    return wallet;
}

export function validatePrivateKey(value) {
    try {
        new Wallet(value);
    } catch (e) {
        console.log(e)
        return false;
    }
    return true;
}