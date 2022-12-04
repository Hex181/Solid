import { useState } from "react";
import GeneratePassphrase from "./GeneratePassphrase";
import VerifyKeyTemp from "./VerifyKeyTemp";
import CreatePasswordTemp from "./CreatePasswordTemp";
import { saveAccount } from "../../utils.js/helpers";
import { useNavigate } from "react-router-dom";

const SetParaphraseKeyTemp = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [keyPhrase, setKeyPhrase] = useState(null);
  const [isCreatingAcct, setIsCreatingAcct] = useState(null);
  const navigate = useNavigate();

  const handleVerify = (phrase) => {
    setKeyPhrase(phrase);
    setIsVerifying(true);
  }

  const handleVerified = () => {
    setIsVerifying(false);
    setIsVerified(true);
  }

  const createWallet = (password) => {
    saveAccount(keyPhrase, password, setIsCreatingAcct, navigate);
  }

  return (
    isVerified ? <CreatePasswordTemp createWallet={createWallet} isCreatingAcct={isCreatingAcct} /> :
      isVerifying ? <VerifyKeyTemp phrase={keyPhrase} handleVerified={handleVerified} /> :
        <GeneratePassphrase handleVerify={handleVerify} />
  );
};

export default SetParaphraseKeyTemp;
