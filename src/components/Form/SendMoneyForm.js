import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import CustomButton from "../CustomButton/customButton";
import TextInput from "../TextInputs/TextInput";

const SendMoneyForm = () => {
  const [amount, setAmount] = useState(null);
  return (
    <>
      <form>
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
            <Text fontWeight="bold">0 SOLID</Text>
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
        href="/wallet"
      >
        Cancel
      </CustomButton>
    </>
  );
};

export default SendMoneyForm;
