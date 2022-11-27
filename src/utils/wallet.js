import { Wallet } from '@ethersproject/wallet';
import { ethers } from "ethers";
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

export async function getAddress(useMetamask) {
    if (useMetamask==='true' || useMetamask===true) {
        let provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts");
        return accounts[0]
    }
    return '';
}