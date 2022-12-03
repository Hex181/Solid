import React from "react";
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
import CreatePassword from "../pages/CreatePassword";
import ImportWallet from "../pages/ImportWallet";
import RecoverSeedPhrase from "../pages/RecoverSeedPhrase";

const AppRoute = () => {

  return render(
    <BrowserRouter>
      <ChakraProvider theme={theme} resetCSS>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/create-wallet" element={<CreateWallet />} />
          <Route path="/wallet" element={<WalletHome />} />
          <Route path="/send-money" element={<SendMoney />} />
          <Route path="/receive-money" element={<ReceiveMoney />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-password" element={<CreatePassword />} />
          <Route path="/import-wallet" element={<ImportWallet />} />
          <Route path="/recover-seed-phrase" element={<RecoverSeedPhrase />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

export default AppRoute;
