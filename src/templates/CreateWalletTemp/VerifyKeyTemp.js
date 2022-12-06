import { Box, Divider, Text } from "@chakra-ui/react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton/customButton";
import NavBar from "../../components/NavBar";
import TextInput from "../../components/TextInputs/TextInput";
import { toaster } from "evergreen-ui";

const VerifyKeyTemp = ({ phrase, handleVerified }) => {
  const [word, setWord] = useState("");
  //Generate random position between 1 and 12
  const [position, setPosition] = useState(Math.floor(Math.random() * 12) + 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (phrase[position - 1] == word) {
      //Save wallet
      handleVerified();
    } else {
      //Alert error
      toaster.danger("Phrase key do not match !", { id: "mess" })
    }
  }

  return (
    <NavBar>
      <Box w="100%" pt="120px">
        <Box
          w={{ base: "80%", lg: "40%" }}
          mx="auto"
          p="20px"
          boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
          borderRadius="8px"
        >
          <Text fontSize={{ base: "25", lg: "40px" }} fontWeight="bold">
            Verify Your Phrase
          </Text>
          <Divider />
          <Box my="10px" color="brand.gray">
            <Text>
              Enter the following word from your recovery phrase to complete the setup process.
            </Text>

            <Text fontWeight="bold" color="black" my="20px" fontSize="20px">Word #{position}</Text>

            <form onSubmit={handleSubmit}>
              <TextInput type="text" placeholder={`Enter key word #${position}`} value={word} onChange={(e) => setWord(e.target.value)} />

              <CustomButton
                w="100%"
                bg="black"
                border="1px solid black"
                color="white"
                hoverBg="white"
                hoverColor="black"
                testid="on-close"
                mt="40px"
                disabled={!word}
              >
                Verify & Complete
              </CustomButton>
            </form>

            <CustomButton
              w="100%"
              bg="white"
              border="1px solid black"
              color="black"
              hoverBg="white"
              hoverColor="black"
              testid="on-close"
              href="/create-wallet"
              mt="40px"
            >
              Start again
            </CustomButton>
          </Box>
        </Box>
        <Box color="brand.gray" textAlign="center" my="20px">
          <Text>Already have a wallet ?</Text>
          <a href="/import-wallet">
            <Text as="u" mt="10px" cursor="pointer">
              Import Existing Wallet
            </Text>
          </a>
        </Box>
      </Box>
    </NavBar>
  )
};

export default VerifyKeyTemp;