import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { securedIcon } from "../../assets/svgs/svg";
import CustomButton from "../../components/CustomButton/customButton";
import NavBar from "../../components/NavBar";

const SetRecoveryMethodTemp = () => {
  return (
    <NavBar>
      <Box w="100%">
        <Box
          w="40%"
          mx="auto"
          my="30px"
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
                <Box>
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
              href="/setup-paraphrase-key"
              mt="40px"
            >
              Secure My Account
            </CustomButton>
          </Box>
        </Box>
        <Box color="brand.gray" textAlign="center">
          <Text>Already have a wallet ?</Text>
          <Text as="u" mt="10px" cursor="pointer">
            Import Existing Wallet
          </Text>
        </Box>
      </Box>
    </NavBar>
  );
};

export default SetRecoveryMethodTemp;
