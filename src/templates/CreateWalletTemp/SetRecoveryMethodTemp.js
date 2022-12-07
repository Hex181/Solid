import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { securedIcon } from "../../assets/svgs/svg";
import CustomButton from "../../components/CustomButton/customButton";
import NavBar from "../../components/NavBar";

const SetRecoveryMethodTemp = ({ handleContinue }) => {
  const [selectedMethod, setSelectedMethod] = useState(0);

  return (
    <NavBar>
      <Box w="100%" pt="120px">
        <Box
          w={{ base: "80%", lg: "40%" }}
          mx="auto"
          p="20px"
          boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
          borderRadius="8px"
        >
          <Text fontSize="34px" fontWeight="bold">
            Choose a Security Method
          </Text>
          <Divider />
          <Box my="10px" color="brand.gray">
            <Text>
              Select a method to secure and recover your account. This will be
              used to verify important activity, recover your account and access
              your account from other devices.
            </Text>

            <Flex bg="#F0F9FE" p="10px" mt="20px" borderRadius="" borderLeftWidth="8px" borderLeftColor="black" alignItems="center" justifyContent="space-between">
              <Box onClick={() => setSelectedMethod(0)}>
                <Text color="black" fontWeight="bold" fontSize="18px">Secure Passphrase</Text>
                <Text>Generate and safely store a unique passphrase.</Text>
              </Box>
              <Box>{securedIcon}</Box>
            </Flex>
            <CustomButton
              w="100%"
              bg="black"
              border="1px solid black"
              color="white"
              hoverBg="white"
              hoverColor="black"
              testid="on-close"
              onClick={() => handleContinue(selectedMethod)}
              mt="40px"
            >
              Continue
            </CustomButton>
          </Box>
        </Box>
        <Box color="brand.gray" textAlign="center" my="20px">
          <Text>Already have a wallet ?</Text>
          <a href="/import-wallet">
            <Text as="u" mt="10px" cursor="pointer">
              Import Existing Wallet
            </Text>
          </a>
        </Box>
      </Box>
    </NavBar>
  );
};

export default SetRecoveryMethodTemp;
