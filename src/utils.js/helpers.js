import { ethers } from 'ethers';
const testneturl = "https://eth.bd.evmos.dev:8545";
const provider = new ethers.providers.JsonRpcProvider(testneturl);
const testnetChainId = "9000"


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
    return signer;
}

export const getNativeBalance = async (address) => {
    const balanceBN = await provider.getBalance(address);
    const balance = ethers.utils.formatEther(balanceBN);
    return parseFloat(balance).toFixed(4);
}

export const getAddress = () => {
    const encryptedWallet = localStorage.getItem("wallet");
    if (encryptedWallet) {
        const address = "0x" + JSON.parse(encryptedWallet).address;
        return address;
    }
}

export async function getTransactions(address) {
    const res = await fetch(`https://api.covalenthq.com/v1/${testnetChainId}/address/${address}/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=false&page-size=10&page-number=1&key=${key}`);

    const txns = (await res.json()).data.items;
    const modifiedTxn = txns.map((t) => {
        return { tx_hash: t.tx_hash, to: t.to_address, value: t.value }
    })
    return modifiedTxn;
}

export async function getTokensBalances(address) {
    const res = await fetch(`https://api.covalenthq.com/v1/${testnetChainId}/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=${key}`)
    const balances = (await res.json()).data.items;
    const modifiedBalances = balances.map((b) => {
        return {
            address: b.contract_address,
            name: b.contract_name,
            symbol: b.contract_ticker_symbol,
            logo: b.logo_url,
            decimals: b.contract_decimals,
            balance: (b.balance / 10 ** b.contract_decimals).toFixed(4),
            rate: b.quote_rate,
            value: b.quote.toFixed(2)
        }
    });
    return modifiedBalances;
}

export const PasswordValidate = (value, setIsValidating) => {
    const validate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/gm;
    validate.test(value) ? setIsValidating(true) : setIsValidating(false)
}

