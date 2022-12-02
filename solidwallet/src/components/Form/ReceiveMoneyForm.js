import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { copyIcon } from "../../assets/svgs/svg";
import CustomButton from "../CustomButton/customButton";
import TextInput from "../TextInputs/TextInput";

const ReceiveMoneyForm = () => {

  return (
    <>
    <Box>
      <Box border="1px solid #F0F2F5" w="50%" mx="auto" mb="30px">
        <Image src="https://www.pngall.com/wp-content/uploads/2/QR-Code-PNG-Photo.png" alt="qr-code" />
      </Box>

      <Box bg="#FAFAFA" borderRadius="6px" p="20px">
        <Flex justifyContent="space-between" alignItems="center" color="brand.gray" fontSize="14px">
          <Text>Account ID</Text>
          <Flex alignItems="center">
            <Box>{copyIcon}</Box>
            <Text ml="5px" cursor="pointer">Copy</Text>
          </Flex>
        </Flex>
        <Box bg="brand.grey" p="10px 20px" mt="10px" borderRadius="6px">
          <Text fontWeight="bold">c5e06085e92dcac470cc7b8126bcb926dd7d8c5562fbc84022578a2b03e5ff23</Text>
        </Box>
      </Box>
    </Box>
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
        Go back
      </CustomButton>
    </>
  );
};

export default ReceiveMoneyForm;
