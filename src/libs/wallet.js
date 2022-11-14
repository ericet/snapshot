const { ethers } = require('ethers')

function getWallet(privateKey){
    let wallet = new ethers.Wallet(privateKey);

    return wallet;
}

module.exports={
    getWallet
}