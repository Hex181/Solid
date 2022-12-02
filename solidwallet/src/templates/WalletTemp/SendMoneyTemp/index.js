import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import ReceiveMoneyForm from "../../../components/Form/ReceiveMoneyForm";
import SendMoneyForm from "../../../components/Form/SendMoneyForm";
import AuthNavBar from "../../../components/NavBar/AuthNavBar";
import ReceiveMoney from "../../../pages/ReceiveMoney";

const SendMoneyTemp = () => {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <AuthNavBar>
      <Box w="100%">
        <Box
          w="40%"
          mx="auto"
          my="30px"
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
                    onClick={() => setShowBalance(true)}
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
                    onClick={() => setShowBalance(false)}
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
                  {showBalance ? <SendMoneyForm /> : <ReceiveMoneyForm />}
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
