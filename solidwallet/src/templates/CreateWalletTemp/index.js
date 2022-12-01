import { Box, Divider, Text } from "@chakra-ui/react";
import CustomButton from "../../components/CustomButton/customButton";
import NavBar from "../../components/NavBar";

const CreateAccountTemp = () => {
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
            Create Your Wallet
          </Text>
          <Divider />
          <Box my="15px" color="brand.gray">
            <Text>
              SOLID Wallet is a secure wallet and account manager for your
              accounts on the NEAR blockchain. Once you create an account,
              securely store your various tokens and collectibles (NFTs).
            </Text>

            <CustomButton
              w="100%"
              bg="black"
              border="1px solid black"
              color="white"
              hoverBg="white"
              hoverColor="black"
              testid="on-close"
              href="/set-recovery-method"
              mt="30px"
            >
              Get Started
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

export default CreateAccountTemp;
