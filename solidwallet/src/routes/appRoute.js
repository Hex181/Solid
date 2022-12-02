import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Home from "../pages";
import { CreateWallet } from "../pages/createWallet";
import SetRecoveryMethod from "../pages/setRecoveryMethod";
import SetParaphraseKey from "../pages/SetParaphraseKey";
import VerifyKey from "../pages/VerifyKey";
import WalletHome from "../pages/walletHome";
import SendMoney from "../pages/SendMoney";
import ReceiveMoney from "../pages/ReceiveMoney";

const AppRoute = () => {

  return render(
    <BrowserRouter>
     <ChakraProvider theme={theme} resetCSS>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/create-wallet" element={<CreateWallet />} />
        <Route path="/set-recovery-method" element={<SetRecoveryMethod />} />
        <Route path="/setup-paraphrase-key" element={<SetParaphraseKey />} />
        <Route path="/verify-paraphrase-key" element={<VerifyKey />} />
        <Route path="/wallet" element={<WalletHome />} />
        <Route path="/send-money" element={<SendMoney />} />
        <Route path="/receive-money" element={<ReceiveMoney />} />
      </Routes>
     </ChakraProvider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

export default AppRoute;
