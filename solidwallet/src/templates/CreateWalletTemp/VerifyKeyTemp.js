import { Box, Divider, Text } from "@chakra-ui/react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton/customButton";
import NavBar from "../../components/NavBar";
import TextInput from "../../components/TextInputs/TextInput";

const VerifyKeyTemp = () => {
  const [key, setKey] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/wallet');
  }
    return (
        <NavBar>
                  <Box w="100%">
        <Box
          w="40%"
          mx="auto"
          my="30px"
          p="20px"
          boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
          borderRadius="8px"
        >
          <Text fontSize="40px" fontWeight="bold">
            Verify Your Phrase
          </Text>
          <Divider />
          <Box my="10px" color="brand.gray">
            <Text>
            Enter the following word from your recovery phrase to complete the setup process.
            </Text>

            <Text fontWeight="bold" color="black" my="20px" fontSize="20px">Word #4</Text>

            <form onSubmit={handleSubmit}>
              <TextInput type="number" placeholder="Enter key word #4" value={key} onChange={(e) => setKey(e.target.value)} />

              <CustomButton
                w="100%"
                bg="black"
                border="1px solid black"
                color="white"
                hoverBg="white"
                hoverColor="black"
                testid="on-close"
                mt="40px"
                disabled={!key}
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
              href="/verify-paraphrase-key"
              mt="40px"
            >
              Start again
            </CustomButton>
          </Box>
        </Box>
        <Box color="brand.gray" textAlign="center">
          <Text>Already have a wallet ?</Text>
          <Text as="u" mt="10px" cursor="pointer">
            Import Existing Wallet
          </Text>
        </Box>
      </Box>
        </NavBar>
    )
};

export default VerifyKeyTemp;