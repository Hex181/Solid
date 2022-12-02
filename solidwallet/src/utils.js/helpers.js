import { ethers } from 'ethers';

export const generatePhrase = () => {
    const wallet = ethers.Wallet.createRandom();
    return wallet.mnemonic.phrase.split(' ');
}

export const saveAccount = (mnemonic, password) => {
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    const encryptedWallet = wallet.encrypt(password);
    localStorage.setItem('wallet', encryptedWallet);
}