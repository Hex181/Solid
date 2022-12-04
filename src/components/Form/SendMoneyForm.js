import { Box, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import CustomButton from "../CustomButton/customButton";
import TextInput from "../TextInputs/TextInput";
import SelectInput from "../TextInputs/SelectInput";
import { getNativeBalance, getTokensBalances, send_token } from "../../utils.js/helpers";
import { toaster } from "evergreen-ui";
import { useNavigate } from "react-router-dom";

const SendMoneyForm = ({ account, handleContinue }) => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(null);
  const [isSending, setIsSending] = useState(false);
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
  }, []);

  const findToken = tokens?.filter((res) => res?.address === selectedToken);

  console.log(findToken);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await send_token('0x3Ea16A3E1FD39690822C8cDF764719ECbd047f14', amount, receiver, account, setIsSending);
    toaster.success(`Token sent successfully!`, { id: "mess" });
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
            step="any"
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

          <SelectInput options={tokens} w="50%" label="Select Token" placeholder="Select token" onChange={(e) => setSelectedToken(e.target.value)} />

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
              {selectedToken ? `${findToken[0]?.balance} ${findToken[0]?.symbol}` : `${nativeBalance} EVMOS`}
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
            isLoading={isSending}
            disabled={!amount || !selectedToken}
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
        Go back
      </CustomButton>
    </>
  );
};

export default SendMoneyForm;
