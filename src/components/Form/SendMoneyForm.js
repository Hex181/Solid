import { Box, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import CustomButton from "../CustomButton/customButton";
import TextInput from "../TextInputs/TextInput";
import SelectInput from "../TextInputs/SelectInput";
import { getNativeBalance, getTokensBalances, send_token } from "../../utils.js/helpers";
import { toaster } from "evergreen-ui";
import { transferIcon } from "../../assets/svgs/svg";

const SendMoneyForm = ({ account, handleContinue }) => {
  const [amount, setAmount] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [tokens, setTokens] = useState();
  const [selectedToken, setSelectedToken] = useState();
  const [nativeBalance, setNativeBalance] = useState("0.00");
  const [receiver, setReceiver] = useState('');

  useEffect(() => {
    getNativeBalance(account.address).then((res) => setNativeBalance(res));
    getTokensBalances(account.address).then((res) => {
      setTokens(res);
      console.log(res);
    })
  }, []);

  const findToken = tokens?.filter((res) => res?.address === selectedToken);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await send_token(selectedToken, amount, receiver, account, setIsSending);
    toaster.success(`Token sent successfully!`, { id: "mess" });
    setIsSending(false);
    const receipt = await res.wait();
    console.log({ receipt });
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

          <SelectInput options={tokens} w="50%" label="From" placeholder="Select Token" onChange={(e) => setSelectedToken(e.target.value)} />

          <TextInput
            label="To"
            placeholder="Enter address you want to send to"
            onChange={(e) => setReceiver(e.target.value)}
            value={receiver}
            icon={transferIcon}
          />

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
              {selectedToken ? `${findToken[0]?.balance} ${findToken[0]?.symbol}` : `${nativeBalance} ETH`}
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
            disabled={!amount}
          >
            Send
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
