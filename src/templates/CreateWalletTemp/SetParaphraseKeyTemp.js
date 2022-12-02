import { useState } from "react";
import GeneratePassphrase from "./GeneratePassphrase";
import VerifyKeyTemp from "./VerifyKeyTemp";

const SetParaphraseKeyTemp = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [keyPhrase, setKeyPhrase] = useState(null);

  const handleVerify = (phrase) => {
    console.log({ phrase });
    setKeyPhrase(phrase);
    setIsVerifying(true);
  }

  return (
    isVerifying ? <VerifyKeyTemp phrase={keyPhrase} /> :
      <GeneratePassphrase handleVerify={handleVerify} />
  );
};

export default SetParaphraseKeyTemp;
