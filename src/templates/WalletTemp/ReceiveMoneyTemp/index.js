import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReceiveMoneyForm from "../../../components/Form/ReceiveMoneyForm";
import AuthNavBar from "../../../components/NavBar/AuthNavBar";

const ReceiveMoneyTemp = () => {
  const [showBalance] = useState(false);
  const navigate = useNavigate();

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
                      onClick={() => navigate('/send-money')}
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
                      onClick={() => navigate('/receive-money')}
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
                    <ReceiveMoneyForm />
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