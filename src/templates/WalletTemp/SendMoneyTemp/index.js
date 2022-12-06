import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import SendMoneyForm from "../../../components/Form/SendMoneyForm";
import AuthNavBar from "../../../components/NavBar/AuthNavBar";

const SendMoneyTemp = ({ account, handleReceiveMoney, handleContinue }) => {
  const [showBalance] = useState(true);

  return (
    <AuthNavBar>
      <Box w="100%" pt='100px' pb="30px">
        <Box
          w="40%"
          mx="auto"
          pt="120px"
          p="20px"
          boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
          borderRadius="8px"
        >
          <Box>
            <Flex w="100%" justifyContent="space-between">
              <Box
                w="100%"
                borderRadius="4px"
              >
                <Flex
                  fontWeight="bold"
                  fontSize="25px"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text
                    color={!showBalance && "brand.gray"}
                    cursor="pointer"
                    bg={!showBalance && "#FAFAFA"}
                    py="20px"
                    w="50%"
                    textAlign="center"
                  >
                    Send
                  </Text>
                  <Text
                    color={showBalance && "brand.gray"}
                    onClick={handleReceiveMoney}
                    cursor="pointer"
                    bg={showBalance && "#FAFAFA"}
                    py="20px"
                    w="50%"
                    textAlign="center"
                  >
                    Receive
                  </Text>
                </Flex>
                <Box mt="60px" mb="20px" mx="auto">
                  <SendMoneyForm account={account} handleContinue={handleContinue} />
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </AuthNavBar>
  );
};

export default SendMoneyTemp;
