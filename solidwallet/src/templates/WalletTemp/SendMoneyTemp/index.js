import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import CustomButton from "../../../components/CustomButton/customButton";
import SendMoneyForm from "../../../components/Form/SendMoneyForm";
import AuthNavBar from "../../../components/NavBar/AuthNavBar";

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
                // boxShadow="rgba(0, 0, 0, 0.09) 0px 3px 12px"
                w="100%"
                borderRadius="4px"
                // border="1px solid #9C9C9C"
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
                  {showBalance ? <SendMoneyForm /> : null}
                </Box>
              </Box>
            </Flex>
          </Box>
          {/* <Text fontSize="34px" fontWeight="bold">
            Choose a Security Method
          </Text>
          <Divider />
          <Box my="10px" color="brand.gray">
            <Text>
              Select a method to secure and recover your account. This will be
              used to verify important activity, recover your account and access
              your account from other devices.
            </Text>

            <CustomButton
              w="100%"
              bg="black"
              border="1px solid black"
              color="white"
              hoverBg="white"
              hoverColor="black"
              testid="on-close"
              href="/setup-paraphrase-key"
              mt="40px"
            >
              Secure My Account
            </CustomButton>
          </Box> */}
        </Box>
      </Box>
    </AuthNavBar>
  );
};

export default SendMoneyTemp;
