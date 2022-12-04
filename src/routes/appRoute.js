import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Home from "../pages";
import { CreateWallet } from "../pages/createWallet";
import WalletHome from "../pages/walletHome";
import SendMoney from "../pages/SendMoney";
import ReceiveMoney from "../pages/ReceiveMoney";
import Login from "../pages/Login";
import ImportWallet from "../pages/ImportWallet";
import RecoverSeedPhrase from "../pages/RecoverSeedPhrase";
import AccountContext from "../context/Account";
import { getAccountDetails } from "../utils.js/helpers";


const AppRoute = () => {
  const hasAccount = localStorage.getItem('wallet');
  let account = {};

  return render(
    < AccountContext.Provider value={account} >
      <BrowserRouter>
        <ChakraProvider theme={theme} resetCSS>
          <Routes>
            <Route index path="/" element={hasAccount ? <WalletHome /> : <Home />} />
            <Route path="/create-wallet" element={<CreateWallet />} />
            <Route path="/send-money" element={<SendMoney />} />
            <Route path="/receive-money" element={<ReceiveMoney />} />
            <Route path="/import-wallet" element={<ImportWallet />} />
            <Route path="/recover-seed-phrase" element={<RecoverSeedPhrase />} />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </AccountContext.Provider >,
    document.getElementById("root")
  );
};

export default AppRoute;
