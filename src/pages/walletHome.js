import { toaster } from "evergreen-ui";
import { useEffect, useState } from "react";
import LoginTemp from "../templates/LoginTemp";
import WalletTemp from "../templates/WalletTemp";
import ReceiveMoneyTemp from "../templates/WalletTemp/ReceiveMoneyTemp";
import SendMoneyTemp from "../templates/WalletTemp/SendMoneyTemp";
import { getAccountDetails } from "../utils.js/helpers";
import MarketPlaceTemp from "../templates/NFTS/MarketPlaceTemp";

const WalletHome = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [signer, setSigner] = useState();
    const [isSendingMoney, setIsSendingMoney] = useState(false);
    const [isReceivingMoney, setIsReceivingMoney] = useState(false);
    const [isViewingMarketPlace, setIsViewingMarketPlace] = useState(false);
    useEffect(() => {
        localStorage.removeItem('new_sign_in');
    }, []);

    const handleLogin = async (password) => {
        setIsLoading(true);
        try {

        } catch (err) {
            setIsLoading(false);
            toaster.danger("Invalid password");
        }
        setSigner(await getAccountDetails(password));
        setIsLoading(false);
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

    const showMarketPlace = () => {
        setIsViewingMarketPlace(true);
    }

    const handleCloseMarketPlace = () => {
        setIsViewingMarketPlace(false);
    }
    return (
        isLoggedIn ?
            isViewingMarketPlace ? <MarketPlaceTemp account={signer} handleCloseMarketPlace={handleCloseMarketPlace} /> :
                isSendingMoney ? <SendMoneyTemp account={signer} handleReceiveMoney={receiveMoney} handleContinue={stopSend} /> :
                    isReceivingMoney ? <ReceiveMoneyTemp address={signer.address} handleSendMoney={sendMoney} handleContinue={stopReceive} /> :
                        <WalletTemp account={signer} handleSendMoney={sendMoney} handleReceiveMoney={receiveMoney} showMarketPlace={showMarketPlace} /> :
            <LoginTemp handleLogin={handleLogin} isLoading={isLoading} />
    )
}

export default WalletHome;