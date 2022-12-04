import { useState } from "react";
import LoginTemp from "../templates/LoginTemp";
import WalletTemp from "../templates/WalletTemp";
import { getAccountDetails } from "../utils.js/helpers";

const WalletHome = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [signer, setSigner] = useState();

    const handleLogin = async (password) => {
        setSigner(await getAccountDetails(password));
        setIsLoggedIn(true);
    }
    return (
        isLoggedIn ?
            <WalletTemp account={signer} /> :
            <LoginTemp handleLogin={handleLogin} />
    )
}

export default WalletHome;