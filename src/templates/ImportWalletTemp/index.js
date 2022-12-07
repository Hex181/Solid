import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { securedIcon } from "../../assets/svgs/svg";
import CustomButton from "../../components/CustomButton/customButton";
import NavBar from "../../components/NavBar";

const ImportWalletTemp = () => {
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
            Import your Wallet
          </Text>
          <Divider />
          <Box my="10px" color="brand.gray">
            <Text>
              If you’ve setup one or more account recovery methods, follow the
              instructions below to import your account.
            </Text>

            <Flex
              bg="#F0F9FE"
              p="10px"
              mt="20px"
              borderRadius=""
              borderLeftWidth="8px"
              borderLeftColor="black"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Text color="black" fontWeight="bold" fontSize="18px">
                  Recover via Passphrase
                </Text>
                <Text>
                  Make sure you have your 12 word recovery phrase, then click
                  below to begin the recovery process..
                </Text>
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
              mt="40px"
              href="/recover-seed-phrase"
            >
              Import Wallet
            </CustomButton>
          </Box>
        </Box>
        <Box color="brand.gray" textAlign="center" my="20px">
          <Text>Don't have a wallet ?</Text>
          <a href="/create-wallet">
                <Text as="u" mt="10px" cursor="pointer">
                Create a Wallet
                </Text>
            </a>
        </Box>
      </Box>
    </NavBar>
  );
};

export default ImportWalletTemp;
