import { Box, Divider, Text } from "@chakra-ui/react";
import { useState } from "react";
import CustomButton from "../../components/CustomButton/customButton";
import NavBar from "../../components/NavBar";
import TextAreaInput from "../../components/TextInputs/TextAreaInput";
import { useNavigate } from "react-router-dom";
import CreatePasswordTemp from "../CreateWalletTemp/CreatePasswordTemp";
import { isValidSeedPhrase, saveAccount } from "../../utils.js/helpers";
import { toaster } from "evergreen-ui";

const RecoverSeedPhraseTemp = () => {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const [phraseKey, setPhraseKey] = useState('');
  const [isCreatingAcct, setIsCreatingAcct] = useState(null);

  const handleSubmit = () => {
    if (isValidSeedPhrase(phraseKey)) {
      setIsValid(true);
    } else {
      toaster.danger("Invalid seed phrase", { id: "mess" });
    }
  }

  const createWallet = (password) => {
    saveAccount(phraseKey.split(' '), password, setIsCreatingAcct, navigate);
  }

  return (
    isValid ? < CreatePasswordTemp createWallet={createWallet} isCreatingAcct={isCreatingAcct} /> :
      <NavBar>
        <Box w="100%">
          <Box
            w={{ base: "80%", lg: "40%" }}
            mx="auto"
            my="30px"
            p="20px"
            boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
            borderRadius="8px"
          >
            <Text fontSize="34px" fontWeight="bold">
              Import using Passphrase
            </Text>
            <Divider />
            <Box my="10px" color="brand.gray">
              <Text>
                Enter the backup passphrase associated with the account.
                Ensure to separate paraphrase key with space and not comma.
              </Text>

              <form onSubmit={handleSubmit}>
                <TextAreaInput label="Paraphrase key (12 word)" placeholder="ball account just ..." value={phraseKey} onChange={(e) => setPhraseKey(e.target.value)} />
              </form>

              <CustomButton
                w="100%"
                bg="black"
                border="1px solid black"
                color="white"
                hoverBg="white"
                hoverColor="black"
                testid="on-close"
                mt="40px"
                onClick={() => handleSubmit()}
              // disabled={arrkey.length < 11}
              >
                Import Wallet
              </CustomButton>
            </Box>
            <Text textAlign="center" mt='20px' fontSize={{ base: "12px", lg: "16px" }} color="brand.gray">Already have a walllet ? <a href="/"><Text as="u">Sign In</Text></a></Text>
          </Box>
          <Box color="brand.gray" textAlign="center">
            <Text>Don't have a wallet ?</Text>
            <a href="/create-wallet">
              <Text as="u" mt="10px" cursor="pointer">
                Create a Wallet
              </Text>
            </a>
          </Box>
        </Box>
      </NavBar>
  )
};

export default RecoverSeedPhraseTemp;