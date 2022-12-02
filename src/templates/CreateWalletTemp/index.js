import { Box, Divider, Text } from "@chakra-ui/react";
import { useState } from "react";
import CustomButton from "../../components/CustomButton/customButton";
import NavBar from "../../components/NavBar";
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
