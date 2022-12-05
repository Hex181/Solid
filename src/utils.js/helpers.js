import { ethers } from 'ethers';
import { toaster } from 'evergreen-ui';
const mainneturl = "https://eth.bd.evmos.org:8545";
const testneturl = "https://eth.bd.evmos.dev:8545";
let url = mainneturl;
const provider = new ethers.providers.JsonRpcProvider(url);
const testnetChainId = "9000"
const mainnetChainId = "9001"
let chainId = mainnetChainId;


const key = "ckey_c5e2191c3ca149f69fa06d6dd0e"

export const generatePhrase = () => {
    const wallet = ethers.Wallet.createRandom();
    return wallet.mnemonic.phrase.split(' ');
}

export const saveAccount = async (wordsArray, password, setIsCreatingAccount, navigate) => {
    setIsCreatingAccount(true);
    const mnemonic = wordsArray.join(' ');
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    const encryptedWallet = await wallet.encrypt(password);
    localStorage.setItem('wallet', encryptedWallet);
    if (encryptedWallet) {
        setIsCreatingAccount(false);
        navigate('/');
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
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
    // console.log({ balance })
    return +parseFloat(balance).toFixed(4);
}

export const getAddress = () => {
    const encryptedWallet = localStorage.getItem("wallet");
    if (encryptedWallet) {
        const address = "0x" + JSON.parse(encryptedWallet).address;
        return address;
    }
}

export async function getTransactions(address) {
    try {
        const res = await fetch(`https://api.covalenthq.com/v1/${chainId}/address/${address}/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=false&page-size=10&key=${key}`);
        const txnJSON = await res.json();
        const txns = (txnJSON).data.items;
        const modifiedTxn = txns.map((t) => {
            return { hash: t.tx_hash, from: t.from_address, to: t.to_address, value: +parseFloat(ethers.utils.formatEther(t.value)).toFixed(4) }
        })
        // console.log({ modifiedTxn });
        return modifiedTxn;
    } catch (err) {
        console.log(err);
        toaster.danger("Error occured when getting transactions!")
    }
}

export async function getTokensBalances(address) {
    const res = await fetch(`https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=${key}`)
    const balances = (await res.json()).data.items;
    const modifiedBalances = balances.map((b) => {
        return {
            address: b.contract_address,
            name: b.contract_name,
            symbol: b.contract_ticker_symbol,
            logo: b.logo_url,
            decimals: b.contract_decimals,
            balance: parseFloat((b.balance / 10 ** b.contract_decimals).toFixed(4)),
            rate: b.quote_rate,
            value: parseFloat(b.quote.toFixed(2))
        }
    });
    // console.log({ modifiedBalances })
    return modifiedBalances;
}

export async function send_token(
    contract_address,
    amount,
    to,
    signer,
    setIsSending
) {
    setIsSending(true);
    const currentGasPrice = await provider.getGasPrice();
    let gas_price = ethers.utils.hexlify(parseInt(currentGasPrice));
    // console.log(`gas_price: ${gas_price}`);

    if (contract_address && contract_address != "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee") {
        // Send erc20 tokens
        const send_abi = ["function transfer(address to, uint amount) returns (bool)"];
        let contract = new ethers.Contract(
            contract_address,
            send_abi,
            signer
        )

        // Token amount
        let numberOfTokens = ethers.utils.parseEther(amount);
        // console.log(`numberOfTokens: ${numberOfTokens}`)

        // Send tokens
        const transferTxn = await contract.transfer(to, numberOfTokens);
        // console.log("transfer transaction sent: ", transferTxn)
        setIsSending(false);
        return transferTxn;
    } // Send native token
    else {
        setIsSending(true);
        const tx = {
            from: signer.address,
            to: to,
            value: ethers.utils.parseEther(amount),
            nonce: await provider.getTransactionCount(
                signer.address,
                "latest"
            ),
            gasLimit: 100000,
            gasPrice: gas_price,
        }
        // console.log(tx);
        try {
            const txResult = await signer.sendTransaction(tx);
            // console.log("transfer transaction sent: ", txResult);
            setIsSending(false);
            return txResult;
        } catch (error) {
            toaster.danger("Insuffient fund !");
            setIsSending(false);
            console.log({ error });
        }
    }
}

export const PasswordValidate = (value, setIsValidating) => {
    const validate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/gm;
    validate.test(value) ? setIsValidating(true) : setIsValidating(false)
}

