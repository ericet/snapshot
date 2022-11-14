import { Wallet } from '@ethersproject/wallet';


export function validatePrivateKey(value) {
    try {
        new Wallet(value);
    } catch (e) { 
      console.log(e)
      return false; }
    return true;
}