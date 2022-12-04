import { ethers } from 'ethers';
const url = "https://eth.bd.evmos.dev:8545";
const provider = new ethers.providers.JsonRpcProvider(url);

const key = "ckey_c5e2191c3ca149f69fa06d6dd0e"

export const generatePhrase = () => {
    const wallet = ethers.Wallet.createRandom();
    return wallet.mnemonic.phrase.split(' ');
}

export const saveAccount = async (wordsArray, password) => {
    const mnemonic = wordsArray.join(' ');
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    const encryptedWallet = await wallet.encrypt(password);
    localStorage.setItem('wallet', encryptedWallet);
}

export const getAccountDetails = async (password) => {
    const encryptedWallet = localStorage.getItem('wallet');
    const wallet = await ethers.Wallet.fromEncryptedJson(encryptedWallet, password);
    const signer = await wallet.connect(provider);
    // const address = wallet.address;
    // const balance = Number(await signer.getBalance()).toFixed(4);
    return signer;
}

export async function getTransactions(address) {
    const res = await fetch(`https://api.covalenthq.com/v1/9000/address/${address}/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=false&page-size=10&page-number=1&key=${key}`);

    const txns = (await res.json()).data.items;
    const modifiedTxn = txns.map((t) => {
        return { tx_hash: t.tx_hash, to: t.to_address, value: t.value }
    })
    return modifiedTxn;
}

export async function getTokensBalances(address) {
    const res = await fetch(`https://api.covalenthq.com/v1/9000/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=${key}`)
    const balances = (await res.json()).data.items;
    const modifiedBalances = balances.map((b) => {
        return {
            address: b.contract_address,
            name: b.contract_name,
            symbol: b.contract_ticker_symbol,
            logo: b.logo_url,
            decimals: b.contract_decimals,
            balance: b.balance,
            rate: b.quote_rate,
            value: b.quote
        }
    });
    return modifiedBalances;
}

export const PasswordValidate = (value, setIsValidating) => {
    const validate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/gm;
    validate.test(value) ? setIsValidating(true) : setIsValidating(false)
}

