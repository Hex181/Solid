import { useState } from "react";
import SetParaphraseKeyTemp from "./SetParaphraseKeyTemp";
import SetRecoveryMethodTemp from "./SetRecoveryMethodTemp";

const CreateAccountTemp = () => {
  const [method, setMethod] = useState(null); // 0 - passphrase

  const handleContinue = (selectedMethod) => {
    setMethod(selectedMethod);
  }

  return (
    method == 0 ? <SetParaphraseKeyTemp /> :
      <SetRecoveryMethodTemp handleContinue={handleContinue} />
  );
};

export default CreateAccountTemp;
