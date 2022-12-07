import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import ReceiveMoneyForm from "../../../components/Form/ReceiveMoneyForm";
import AuthNavBar from "../../../components/NavBar/AuthNavBar";

const ReceiveMoneyTemp = ({ address, handleSendMoney, handleContinue }) => {
  const [showBalance] = useState(false);

  return (
    <AuthNavBar>
      <Box w="100%" pt="130px" pb="40px">
        <Box
          w="40%"
          mx="auto"
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
                    onClick={handleSendMoney}
                  >
                    Send
                  </Text>
                  <Text
                    color={showBalance && "brand.gray"}
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
                  <ReceiveMoneyForm address={address} handleContinue={handleContinue} />
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </AuthNavBar>
  )
};

export default ReceiveMoneyTemp;