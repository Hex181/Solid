import { toaster } from "evergreen-ui";
import { useState } from "react";
import LoginTemp from "../templates/LoginTemp";
import WalletTemp from "../templates/WalletTemp";
import ReceiveMoneyTemp from "../templates/WalletTemp/ReceiveMoneyTemp";
import SendMoneyTemp from "../templates/WalletTemp/SendMoneyTemp";
import { getAccountDetails } from "../utils.js/helpers";

const WalletHome = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [signer, setSigner] = useState();
    const [isSendingMoney, setIsSendingMoney] = useState(false);
    const [isReceivingMoney, setIsReceivingMoney] = useState(false);

    const handleLogin = async (password) => {
        try {

        } catch (err) {
            console.log(err);
            toaster.danger("Invalid password");
        }
        setSigner(await getAccountDetails(password));
        setIsLoggedIn(true);
    }
    const stopSend = () => {
        setIsSendingMoney(false);
    }
    const stopReceive = () => {
        setIsReceivingMoney(false);
    }
    const sendMoney = () => {
        setIsReceivingMoney(false);
        setIsSendingMoney(true);
    }
    const receiveMoney = () => {
        setIsSendingMoney(false);
        setIsReceivingMoney(true);
    }
    return (
        isLoggedIn ?
            isSendingMoney ? <SendMoneyTemp account={signer} handleReceiveMoney={receiveMoney} handleContinue={stopSend} /> :
                isReceivingMoney ? <ReceiveMoneyTemp address={signer.address} handleSendMoney={sendMoney} handleContinue={stopReceive} /> :
                    <WalletTemp account={signer} handleSendMoney={sendMoney} handleReceiveMoney={receiveMoney} /> :
            <LoginTemp handleLogin={handleLogin} />
    )
}

export default WalletHome;