import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Home from "../pages";
import { CreateWallet } from "../pages/createWallet";
import WalletHome from "../pages/walletHome";
import ImportWallet from "../pages/ImportWallet";
import RecoverSeedPhrase from "../pages/RecoverSeedPhrase";
import AccountContext from "../context/Account";

const AppRoute = () => {
  const hasAccount = localStorage.getItem('wallet');

  console.log(hasAccount);

  const account = {
    signer: undefined,
    balances: undefined,
    updateSigner: function (new_signer) { this.signer = new_signer },
    updateBalances: function (new_balances) { this.balances = new_balances }
  }

  return render(
    <AccountContext.Provider value={account}>
      <BrowserRouter>
        <ChakraProvider theme={theme} resetCSS>
          <Routes>
            <Route index path="/" element={hasAccount ? <WalletHome /> : <Home />} />
            <Route path="/create-wallet" element={<CreateWallet />} />
            <Route path="/import-wallet" element={<ImportWallet />} />
            <Route path="/recover-seed-phrase" element={<RecoverSeedPhrase />} />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </AccountContext.Provider>,
    document.getElementById("root")
  );
};

export default AppRoute;
