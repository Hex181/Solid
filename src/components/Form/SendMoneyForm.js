import { Box, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import CustomButton from "../CustomButton/customButton";
import TextInput from "../TextInputs/TextInput";
import { getNativeBalance, getTokensBalances, send_token } from "../../utils.js/helpers";
import { toaster } from "evergreen-ui";

const SendMoneyForm = ({ account, handleContinue }) => {
  const [amount, setAmount] = useState(null);
  const [tokens, setTokens] = useState();
  const [selectedToken, setSelectedToken] = useState();
  const [nativeBalance, setNativeBalance] = useState("0.0000");
  const [receiver, setReceiver] = useState("0x82Ae380939060F72B37c1Ac82b45Ac48F62134Df");

  useEffect(() => {
    getNativeBalance(account.address).then((res) => setNativeBalance(res));
    getTokensBalances(account.address).then((res) => {
      setTokens(res);
      console.log(res);
    })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await send_token(selectedToken?.address, amount, receiver, account);
    toaster.success(`Token sent!`);
    console.log(res);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box mx="auto" textAlign="center">
          <TextInput
            placeholder="0"
            fontWeight="bold"
            focusBorderColor="white"
            focusColor="white"
            w="50%"
            h="80px"
            border="none"
            fontSize="60px"
            textAlign="center"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Text color="brand.gray">- USD</Text>
          <CustomButton
            w="10%"
            bg="black"
            border="1px solid black"
            color="white"
            hoverBg="white"
            hoverColor="black"
            testid="on-close"
            mt="20px"
          >
            Use Max
          </CustomButton>

          <Flex
            alignItems="center"
            bg="#FAFAFA"
            borderRadius="4px"
            mt="20px"
            justifyContent="space-between"
            p="20px"
          >
            <Text color="brand.gray">Available to Send</Text>
            <Text fontWeight="bold">
              {selectedToken ? `${selectedToken.balance} ${selectedToken.symbol}` : `${nativeBalance} EVMOS`}
            </Text>
          </Flex>

          <CustomButton
            w="100%"
            bg="black"
            border="1px solid black"
            color="white"
            hoverBg="white"
            hoverColor="black"
            testid="on-close"
            mt="20px"
            disabled={!amount}
          >
            Continue
          </CustomButton>
        </Box>
      </form>
      <CustomButton
        w="100%"
        bg="none"
        border="1px solid black"
        color="black"
        hoverBg="none"
        hoverColor="black"
        testid="on-close"
        mt="20px"
        onClick={handleContinue}
      >
        Cancel
      </CustomButton>
    </>
  );
};

export default SendMoneyForm;
