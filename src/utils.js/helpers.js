import { ethers } from 'ethers';
import { toaster } from 'evergreen-ui';
const testneturl = "https://rpc-mumbai.maticvigil.com/v1/022fd3cf836ccc65239550879cee7094077e1578";
const mainneturl = "https://rpc-mainnet.maticvigil.com/v1/022fd3cf836ccc65239550879cee7094077e1578";
let url = mainneturl;
const provider = new ethers.providers.JsonRpcProvider(url);
const mainnetChainId = "137";
const testnetChainId = "80001";
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

export const isValidSeedPhrase = (phrase) => {
    return ethers.utils.isValidMnemonic(phrase);
}

export async function getTransactions(address) {
    try {
        const res = await fetch(`https://api.covalenthq.com/v1/${chainId}/address/${address}/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=false&page-size=6&key=${key}`);
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
    const res = await fetch(`https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=true&key=${key}`)
    const balances = (await res.json()).data.items;
    console.log({ balances })
    const modifiedBalances = balances.map((t) => {
        return {
            address: t.contract_address,
            name: t.contract_name,
            symbol: t.contract_ticker_symbol,
            logo: t.logo_url,
            type: t.type,
            nft_data: t.nft_data,
            decimals: t.contract_decimals,
            balance: parseFloat((t.balance / 10 ** t.contract_decimals).toFixed(4)),
            rate: t.quote_rate,
            value: parseFloat(t.quote.toFixed(2))
        }
    });
    console.log({ modifiedBalances });
    return modifiedBalances;
}

export async function getExternalMetadata(contractAddress, tokenId) {
    // const res = await fetch(`https://api.covalenthq.com/v1/${chainId}/tokens/${contractAddress}/nft_metadata/${tokenId}/?quote-currency=USD&format=JSON&key=${key}`);
    const res = await fetch(`https://api.covalenthq.com/v1/${chainId}/tokens/0x1EcC5d009663979889ddAD7f1D31f4d913E5B736/nft_metadata/0/?quote-currency=USD&format=JSON&key=ckey_c5e2191c3ca149f69fa06d6dd0e`);
    const nftMetadata = (await res.json()).data.items[0];
    console.log(nftMetadata);
    return { nftMetadata }
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

